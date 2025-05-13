function solution(p) {
  if (p.length === 0) return p;

  let count = 0;
  let u = "";
  let v = "";

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      count++;
    } else {
      count--;
    }

    u += p[i];

    if (count === 0) {
      v = p.slice(i + 1);
      break;
    }
  }

  function isCorrect(str) {
    let count = 0;
    for (let char of str) {
      if (count < 0) return false;

      if (char === "(") {
        count++;
      } else {
        count--;
      }
    }
    return count === 0;
  }

  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    let answer = "(" + solution(v) + ")";

    for (let i = 1; i < u.length - 1; i++) {
      answer += u[i] === "(" ? ")" : "(";
    }

    return answer;
  }
}

console.log(solution("(()())()"));
