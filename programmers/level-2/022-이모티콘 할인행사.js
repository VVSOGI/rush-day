/**
 * permutation, 반복문 구현
 */

function solution(users, emoticons) {
  const discountRates = [40, 30, 20, 10];

  function getPermutations(arr, count) {
    if (count === 1) {
      return arr.map((item) => [item]);
    }

    const result = [];
    arr.forEach((item, index, array) => {
      const permutations = getPermutations([...array.slice(0, index), ...array.slice(index)], count - 1);
      const attached = permutations.map((permutation) => [item, ...permutation]);
      result.push(...attached);
    });

    return result;
  }

  const permutations = getPermutations(discountRates, emoticons.length);
  let maximumPlus = 0;
  let maximumCost = 0;

  for (const permutation of permutations) {
    let totalPlus = 0;
    let totalCost = 0;
    for (const [purchaseRate, limit] of users) {
      let purchase = 0;

      for (let i = 0; i < emoticons.length; i++) {
        if (permutation[i] >= purchaseRate) {
          purchase += (emoticons[i] * (100 - permutation[i])) / 100;
        }
      }

      if (purchase >= limit) {
        totalPlus += 1;
        purchase = 0;
      }

      totalCost += purchase;
    }

    if (totalPlus === maximumPlus) {
      maximumCost = Math.max(maximumCost, totalCost);
    }

    if (totalPlus > maximumPlus) {
      maximumPlus = totalPlus;
      maximumCost = totalCost;
    }
  }

  return [maximumPlus, maximumCost];
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
