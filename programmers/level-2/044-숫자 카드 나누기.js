function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  function getDivisors(array) {
    const divisor = [];
    for (let i = 2; i <= array[0]; i++) {
      if (array[0] % i === 0) divisor.push(i);
    }

    return divisor;
  }

  function getPossibles(array, target) {
    const possibles = [];
    for (const item of array) {
      let flag = true;
      for (const targetItem of target) {
        if (targetItem % item !== 0) {
          flag = false;
        }
      }
      if (flag) possibles.push(item);
    }

    return possibles;
  }

  function getComparePartner(possibles, target) {
    const compare = [0];
    for (const possible of possibles) {
      let flag = true;
      for (const item of target) {
        if (item % possible === 0) flag = false;
      }

      if (flag) compare.push(possible);
    }

    return compare.pop();
  }

  return Math.max(
    getComparePartner(getPossibles(getDivisors(arrayA), arrayA), arrayB),
    getComparePartner(getPossibles(getDivisors(arrayB), arrayB), arrayA)
  );
}

console.log(solution([10, 20], [5, 17]));
