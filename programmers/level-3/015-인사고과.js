function solution(scores) {
  const [targetAttitude, targetPeerReview] = scores[0];
  let order = 1;
  let last = 0;

  scores.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  console.log(scores);

  for (const [attitude, peerReview] of scores) {
    if (attitude > targetAttitude && peerReview > targetPeerReview) return -1;
    if (peerReview >= last) {
      if (attitude + peerReview > targetAttitude + targetPeerReview) {
        order += 1;
      }
      last = peerReview;
    }
  }

  return order;
}

console.log(
  solution([
    [2, 2],
    [1, 4],
    [3, 1],
    [2, 1],
  ])
);
