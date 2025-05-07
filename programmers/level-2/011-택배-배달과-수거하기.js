/**
 * 그리디
 */

function solution(cap, n, deliveries, pickups) {
  let delivery = 0;
  let collect = 0;
  let move = 0;

  for (let i = n - 1; i >= 0; i--) {
    delivery += deliveries[i];
    collect += pickups[i];

    while (delivery > 0 || collect > 0) {
      delivery -= cap;
      collect -= cap;
      move += (i + 1) * 2;
    }
  }

  return move;
}

console.log(solution(4, 5, [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
