/**
 * DFS 탐색
 * for + while 반복으로 풀어도 문제 없다.
 * 근데 DFS가 더 깔끔한 것 같다.
 */

function solution(cards) {
  const result = [];
  const set = new Set();

  function dfs(index, move) {
    if (set.has(cards[index])) {
      return move;
    }

    set.add(cards[index]);
    return dfs(cards[index] - 1, move + 1);
  }

  for (let i = 0; i < cards.length; i++) {
    if (!set.has(cards[i])) {
      result.push(dfs(i, 0));
    }
  }

  result.sort((a, b) => b - a);
  return result.length > 1 ? result[0] * result[1] : 0;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
