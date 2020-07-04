class List {
  constructor() {
    this.listSize = 0;
    this.position = 0;
    this.data = [];
  }

  get length() {
    return this.listSize;
  }

  append(element) {
    this.data[this.listSize] = element;
    this.listSize++;
  }

  find(element) {
    for (let i = 0; i < this.listSize; i++) {
      if (this.data[i] === element) return i;
    }
    return -1;
  }

  remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
      this.data.splice(foundAt, 1);
      this.listSize--;
      return true;
    }
    return false;
  }

  printElement() {
    return this.data;
  }

  insert(element, after) {
    let insertPosition = this.find(after);
    if (insertPosition > -1) {
      this.data.splice(insertPosition + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  clear() {
    this.data = [];
    this.listSize = 0;
  }

  front() {
    this.position = 0;
  }

  end() {
    this.position = this.listSize - 1;
  }

  prev() {
    if (this.position === 0) {
      return true;
    }
    this.position--;
  }

  next() {
    if (this.position === this.listSize - 1) {
      return true;
    }
    this.position++;
  }

  currentPosition() {
    return this.position;
  }

  moveTo(position) {
    this.position = position;
  }

  getElement() {
    return this.data[this.position];
  }
}

const list = new List();

list.append(1);
list.append(2);
list.append(3);
console.log(list.length);
console.log(list.find(2));

list.remove(2);
console.log(list.length);

list.clear();
console.log(list.length);

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list.length);

list.front();
console.log(list.getElement());

list.end();
console.log(list.getElement());

list.prev();
list.prev();
console.log(list.getElement());

list.next();
console.log(list.getElement());
