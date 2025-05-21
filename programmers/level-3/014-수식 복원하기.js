function solution(expressions) {
  function getUndefined() {
    const find = [];

    for (const expression of expressions) {
      const [_, result] = expression.split(" = ");
      if (result === "X") find.push(expression);
    }

    return find;
  }

  function findBaseNumberRange() {
    const max = 9;
    let min = 2;

    for (const expression of expressions) {
      const [command, result] = expression.split(" = ");
      const [a, _, b] = command.split(" ");
      const numbers = a + b + result;
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === "X") continue;
        min = Math.max(min, parseInt(numbers[i]) + 1);
      }
    }

    return [min, max];
  }

  function findBaseNumber(min, max) {
    const result = [];

    for (let i = min; i <= max; i++) {
      let isPossible = true;

      for (const expression of expressions) {
        const [command, result] = expression.split(" = ");
        if (result === "X") continue;
        const [a, operator, b] = command.split(" ");

        if (operator === "+" && (parseInt(a, i) + parseInt(b, i)).toString(i) !== result) {
          isPossible = false;
        }

        if (operator === "-" && (parseInt(a, i) - parseInt(b, i)).toString(i) !== result) {
          isPossible = false;
        }
      }

      if (isPossible) result.push(i);
    }

    return result;
  }

  const findUndefined = getUndefined();
  const [min, max] = findBaseNumberRange();
  const bases = findBaseNumber(min, max);

  const result = [];

  for (const find of findUndefined) {
    const [command, _] = find.split(" = ");
    const [a, operator, b] = command.split(" ");
    const possibles = new Set();

    for (const base of bases) {
      if (operator === "+") {
        possibles.add((parseInt(a, base) + parseInt(b, base)).toString(base));
      }

      if (operator === "-") {
        possibles.add((parseInt(a, base) - parseInt(b, base)).toString(base));
      }
    }

    if (possibles.size > 1) {
      result.push(`${a} ${operator} ${b} = ?`);
    } else {
      result.push(`${a} ${operator} ${b} = ${[...possibles][0]}`);
    }
  }

  return result;
}

console.log(solution(["1 + 1 = 2", "1 + 3 = 4", "1 + 5 = X", "1 + 2 = X"]));
