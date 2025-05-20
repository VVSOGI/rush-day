class NodeTree {
  constructor(node, x, y) {
    this.node = node;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }

  insertNode(node) {
    if (node.x < this.x) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.insertNode(node);
      }
    } else {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.insertNode(node);
      }
    }
  }

  preOrder() {
    return [this.node, ...(this.left ? this.left.preOrder() : []), ...(this.right ? this.right.preOrder() : [])];
  }

  postOrder() {
    return [...(this.left ? this.left.postOrder() : []), ...(this.right ? this.right.postOrder() : []), this.node];
  }
}

function solution(coordinates) {
  const nodes = coordinates.map(([x, y], index) => new NodeTree(index + 1, x, y));
  nodes.sort((a, b) => b.y - a.y);
  const root = nodes[0];

  for (let i = 1; i < nodes.length; i++) {
    root.insertNode(nodes[i]);
  }

  return [root.preOrder(), root.postOrder()];
}

console.log(
  solution([
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ])
);
