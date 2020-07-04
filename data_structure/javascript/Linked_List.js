class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function LinkedList() {
  this.length = 0;
  this.head = null;
}

// 노드 추가
LinkedList.prototype.append = function (data) {
  let node = new Node(data);
  let currentHead;

  if (this.head === null) {
    this.head = node;
  } else {
    currentHead = this.head;
    while (currentHead.next) {
      currentHead = currentHead.next;
    }
    currentHead.next = node;
  }

  this.length++;
};

// 특정 위치의 노드 제거
LinkedList.prototype.removeAt = function (position) {
  if (position > -1 && position < this.length) {
    let currentHead = this.head;
    let prev,
      index = 0;
    if (position === 0) {
      this.head = currentHead.next;
    } else {
      while (index++ < position) {
        prev = currentHead;
        currentHead = prev.next;
      }

      prev.next = currentHead.next;
    }
    currentHead.next = null;
    this.length--;

    return currentHead.data;
  }
  return null;
};

// 요소의 인덱스를 반환
LinkedList.prototype.indexOf = function (data) {
  let currentHead = this.head;
  let index = -1;
  while (currentHead) {
    if (currentHead.data === data) {
      index++;
      return index;
    }

    index++;
    currentHead = currentHead.next;
  }
  return -1;
};

// 데이터를 기준으로 요소를 제거
LinkedList.prototype.remove = function (data) {
  let index = this.indexOf(data);
  return this.removeAt(index);
};

// 임의의 위치에 원소를 삽입
LinkedList.prototype.insert = function (position, data) {
  if (position > -1 && position < this.length) {
    let node = new Node(data);
    let prev,
      index = 0;
    currentHead = this.head;

    if (position === 0) {
      node.next = currentHead;
      this.head = node;
    } else {
      while (index++ < position) {
        prev = currentHead;
        currentHead = prev.next;
      }

      prev.next = node;
      node.next = currentHead;
    }

    this.length++;

    return true;
  }
  return false;
};
