/**
 * DFS 완전 탐색, 백트래킹
 * 일단 가능하면 쏜다.
 */

function solution(n, info) {
  const ryan = Array(info.length).fill(0);
  let result = Array(info.length).fill(0);
  let maximumScore = 0;

  function compareOpponent(user, opponent) {
    const scoreBoard = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    let score = 0;

    for (let i = 0; i < user.length; i++) {
      if (user[i] > opponent[i]) score += scoreBoard[i];
      if (opponent[i] > user[i]) score -= scoreBoard[i];
    }

    return score;
  }

  function compareMaximum(user) {
    for (let i = user.length - 1; i >= 0; i--) {
      if (user[i] > result[i]) return user;
      if (result[i] > user[i]) return result;
    }

    return user;
  }

  function dfs(index, arrow, ryan, apeach) {
    if (index === 10 || arrow === 0) {
      ryan[10] += arrow;

      const compareScore = compareOpponent(ryan, apeach);
      if (compareScore === maximumScore) {
        const maximum = compareMaximum(ryan);
        result = [...maximum];
      }

      if (compareScore > maximumScore) {
        result = [...ryan];
        maximumScore = compareScore;
      }

      ryan[10] -= arrow;
      return;
    }

    if (arrow - apeach[index] > 0) {
      ryan[index] += apeach[index] + 1;
      dfs(index + 1, arrow - (apeach[index] + 1), ryan, apeach);
      ryan[index] -= apeach[index] + 1;
    }

    dfs(index + 1, arrow, ryan, apeach);
  }

  dfs(0, n, ryan, info);

  return maximumScore !== 0 ? result : [-1];
}

console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
