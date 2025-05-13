function solution(places) {
  const result = [];

  function getManhatten(x1, y1, x2, y2) {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
  }

  function checkPartitionRule(x1, y1, x2, y2, place) {
    if (x1 === x2 && place[Math.abs(y1 + y2) / 2][x1] === "X") return true;
    if (y1 === y2 && place[y1][Math.abs(x1 + x2) / 2] === "X") return true;
    if (place[y1][x2] === "X" && place[y2][x1] === "X") return true;
    return false;
  }

  function isPossibleExam(coordinates, place) {
    for (let i = 0; i < coordinates.length; i++) {
      for (let j = i + 1; j < coordinates.length; j++) {
        const [currentY, currentX] = coordinates[i];
        const [nextY, nextX] = coordinates[j];
        const distance = getManhatten(currentX, currentY, nextX, nextY);
        if (distance < 2) return false;
        if (distance === 2 && !checkPartitionRule(currentX, currentY, nextX, nextY, place)) return false;
      }
    }

    return true;
  }

  for (const place of places) {
    const coordinates = [];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          coordinates.push([i, j]);
        }
      }
    }

    if (isPossibleExam(coordinates, place)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);
