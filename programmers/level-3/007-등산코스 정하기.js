class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length < 2) {
      return this.heap.shift();
    }

    const target = this.heap[0];
    this.heapifyDown();
    return target;
  }

  heapifyUp() {
    let current = this.heap.length - 1;
    while (current !== 0) {
      let target = Math.floor((current - 1) / 2);
      if (this.heap[current][1] < this.heap[target][1]) {
        [this.heap[target], this.heap[current]] = [this.heap[current], this.heap[target]];
        current = target;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let target = 0;
    this.heap[target] = this.heap.pop();
    while (true) {
      let leftChild = target * 2 + 1;
      let rightChild = target * 2 + 2;
      let current = target;

      if (this.heap[leftChild] && this.heap[leftChild][1] < this.heap[current][1]) {
        current = leftChild;
      }

      if (this.heap[rightChild] && this.heap[rightChild][1] < this.heap[current][1]) {
        current = rightChild;
      }

      if (current === target) {
        return;
      }

      [this.heap[current], this.heap[target]] = [this.heap[target], this.heap[current]];
      target = current;
    }
  }
}

function solution(n, paths, gates, summits) {
  const graph = Array(n + 1)
    .fill()
    .map(() => []);

  const minHeap = new MinHeap();

  for (const [v1, v2, cost] of paths) {
    graph[v1].push([v2, cost]);
    graph[v2].push([v1, cost]);
  }

  const visited = Array(n + 1).fill(Infinity);
  const ends = new Set(summits);

  for (const gate of gates) {
    visited[gate] = 0;
    minHeap.push([gate, 0]);
  }

  while (minHeap.heap.length) {
    const [node, cost] = minHeap.pop();
    if (ends.has(node) || visited[node] < cost) continue;

    for (const [nextNode, nextCost] of graph[node]) {
      const maxCost = Math.max(cost, nextCost);
      if (maxCost < visited[nextNode]) {
        visited[nextNode] = maxCost;
        minHeap.push([nextNode, maxCost]);
      }
    }
  }

  summits.sort((a, b) => a - b);

  let result = [0, Infinity];
  for (const summit of summits) {
    if (result[1] > visited[summit]) {
      result = [summit, visited[summit]];
    }
  }

  return result;
}

console.log(
  solution(
    7,
    [
      [1, 2, 5],
      [1, 4, 1],
      [2, 3, 1],
      [2, 6, 7],
      [4, 5, 1],
      [5, 6, 1],
      [6, 7, 1],
    ],
    [3, 7],
    [1, 5]
  )
);
