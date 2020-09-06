class Stack {
  constructor() {
    this.store = [];
  }

  push(data) {
    this.store.push(data);
  }

  pop(data) {
    this.store.pop();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
