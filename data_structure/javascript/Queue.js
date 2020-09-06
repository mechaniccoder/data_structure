// 배열을 이용한 큐

class Queue {
  constructor() {
    this.store = [];
  }

  enqueue(data) {
    this.store.push(data);
  }

  dequeue() {
    return this.store.shift();
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();

queue.enqueue(4);
queue.dequeue();

console.log(queue);

// Linked List를 활용한 큐

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      let tmp = this.head;

      while (tmp.next) {
        tmp = tmp.next;
      }

      tmp.next = node;
    }
  }

  dequeue() {
    const tmp = this.head;
    this.head = this.head.next;

    return tmp;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

queue.dequeue();
queue.dequeue();

console.log(queue.head);
