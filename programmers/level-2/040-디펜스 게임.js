class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);

    if (this.queue.length > 1) {
      this.heapifyUp();
    }
  }

  pop() {
    if (!this.queue.length) {
      return null;
    }
    const target = this.queue[0];
    this.heapifyDown();
    return target;
  }

  heapifyUp() {
    let target = this.queue.length - 1;
    while (target !== 0) {
      const compare = Math.floor((target - 1) / 2);
      if (this.queue[target] > this.queue[compare]) {
        [this.queue[compare], this.queue[target]] = [this.queue[target], this.queue[compare]];
        target = compare;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    const last = this.queue.pop();
    if (!this.queue.length) return;
    let currentIndex = 0;
    this.queue[currentIndex] = last;

    while (true) {
      const leftIndexChild = currentIndex * 2 + 1;
      const rightIndexChuld = currentIndex * 2 + 2;
      let targetIndex = currentIndex;

      if (this.queue[targetIndex] < this.queue[leftIndexChild]) {
        targetIndex = leftIndexChild;
      }

      if (this.queue[targetIndex] < this.queue[rightIndexChuld]) {
        targetIndex = rightIndexChuld;
      }

      if (targetIndex === currentIndex) return;

      [this.queue[currentIndex], this.queue[targetIndex]] = [this.queue[targetIndex], this.queue[currentIndex]];
      currentIndex = targetIndex;
    }
  }
}

function solution(n, k, enemy) {
  const maxHeap = new PriorityQueue();

  for (let i = 0; i < enemy.length; i++) {
    maxHeap.push(enemy[i]);
    n -= enemy[i];

    if (n < 0) {
      if (k > 0) {
        k -= 1;
        n += maxHeap.pop();
      } else {
        return i;
      }
    }
  }

  return enemy.length;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
