function solution(m, n, startX, startY, balls) {
  const result = [];

  for (const [currentX, currentY] of balls) {
    const distances = [];
    if (!(startX === currentX && currentY > startY)) {
      const topDistance = Math.pow(currentX - startX, 2) + Math.pow(currentY - (2 * n - startY), 2);
      distances.push(topDistance);
    }

    if (!(startX === currentX && currentY < startY)) {
      const bottomDistance = Math.pow(currentX - startX, 2) + Math.pow(currentY - startY * -1, 2);
      distances.push(bottomDistance);
    }

    if (!(startY === currentY && currentX > startX)) {
      const rightDistance = Math.pow(currentX - (2 * m - startX), 2) + Math.pow(currentY - startY, 2);
      distances.push(rightDistance);
    }

    if (!(startY === currentY && currentX < startX)) {
      const leftDistance = Math.pow(currentX - startX * -1, 2) + Math.pow(currentY - startY, 2);
      distances.push(leftDistance);
    }

    result.push(Math.min(...distances));
  }

  return result;
}

console.log(
  solution(10, 10, 3, 7, [
    [7, 7],
    [2, 7],
    [7, 3],
  ])
);
