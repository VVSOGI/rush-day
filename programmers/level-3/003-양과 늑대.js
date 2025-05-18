class NodeTree {
  constructor(node, animal) {
    this.node = node;
    this.animal = animal;
    this.left = null;
    this.right = null;
  }
}

function solution(info, edges) {
  const nodes = info.map((item, index) => new NodeTree(index, item));
  for (const [parent, child] of edges) {
    if (!nodes[parent].left) {
      nodes[parent].left = nodes[child];
    } else {
      nodes[parent].right = nodes[child];
    }
  }

  const root = nodes[0];
  let maximumSheep = 0;

  function findMaximumSheep(node, sheep, wolf, possible) {
    let currentSheep = sheep;
    let currentWolf = wolf;

    if (node.animal) {
      currentWolf += 1;
    } else {
      currentSheep += 1;
    }

    if (currentWolf >= currentSheep) return;
    maximumSheep = Math.max(maximumSheep, currentSheep);

    const nextPossible = new Set(possible);
    if (node.left) nextPossible.add(node.left);
    if (node.right) nextPossible.add(node.right);

    nextPossible.delete(node);

    for (const next of nextPossible) {
      findMaximumSheep(next, currentSheep, currentWolf, nextPossible);
    }
  }

  findMaximumSheep(root, 0, 0, new Set([root]));

  return maximumSheep;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);
