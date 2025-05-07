/**
 * 그리디, index
 * A의 갯수와 index의 위치에 따른 효율적 방법 선택
 * Math.min(처음부터 끝까지, 앞으로 갔다가 뒤로 돌아가기, 뒤로 돌아갔다가 앞으로 가기)
 */

function solution(name) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let verticalCount = 0;
  let horizontalCount = name.length - 1;

  name.split("").forEach((item) => {
    const index = alphabet.indexOf(item);
    const lastIndex = alphabet.length - index;
    verticalCount += Math.min(index, lastIndex);
  });

  for (let i = 0; i < name.length; i++) {
    let nextA = i + 1;
    while (name[nextA] === "A") {
      nextA += 1;
    }

    const moveForward = i * 2 + (name.length - nextA);
    // 해당 i까지 앞으로 갔다가 뒤로
    const moveBack = (name.length - nextA) * 2 + i;
    // 해당 i까지 뒤로 갔다가 앞으로

    horizontalCount = Math.min(horizontalCount, moveForward, moveBack);

    if (nextA === name.length) {
      horizontalCount = Math.min(horizontalCount, i);
    }

    i = nextA - 1;
  }

  return verticalCount + horizontalCount;
}

console.log(solution("JAN"));
