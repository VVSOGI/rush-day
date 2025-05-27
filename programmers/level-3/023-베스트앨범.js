function solution(genres, plays) {
  const total = {};

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    if (!total[genre]) {
      total[genre] = [play, [[i, play]]];
    } else {
      total[genre][0] += play;
      total[genre][1].push([i, play]);
    }
  }

  const values = [];

  for (const value of Object.values(total)) {
    values.push(value);
  }

  values.sort((a, b) => b[0] - a[0]);

  const result = values.map(([_, song]) => {
    song.sort((a, b) => b[1] - a[1]);
    return song.map(([index]) => index).filter((_, index) => index < 2);
  });

  return result.flat();
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));
