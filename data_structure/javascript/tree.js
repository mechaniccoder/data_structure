class Node {
  constructor(data) {
    this.data = data;
    this.children = []; // 자식 노드들이 담길 배열입니다.
  }

  add(data) {
    // 자식 노드를 추가하는 메서드입니다. 시간복잡도 O(1)이겠죠.
    this.children.push(new Node(data));
  }

  remove(data) {
    // 자식 노드를 삭제하는 메서드입니다.최악의 경우 시간복잡도 O(N)입니다.
    this.children = this.children.filter((child) => child.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  BFS(callback) {
    if (this.root === null) return;

    const queue = [this.root];
    while (queue.length !== 0) {
      const currentNode = queue.shift();
      queue.push(...currentNode.children);
      let bool = callback(currentNode);
      if (bool) {
        console.log("일치", currentNode);
      } else {
        console.log("불일치");
      }
    }
  }

  DFS(callback) {
    if (this.root === null) return;

    const queue = [this.root];
    while (queue.length !== 0) {
      const currentNode = queue.shift();
      queue.unshift(...currentNode.children);
      let bool = callback(currentNode);
      if (bool) {
        console.log("일치", currentNode);
      } else {
        console.log("불일치");
      }
    }
  }
}

function findNodeCallback(node) {
  if (node.data === "2-3") {
    return true;
  }
  return false;
}

const tree = new Tree();
tree.root = new Node("루트 노드입니다.");
tree.root.add("자식1");
tree.root.children[0].add("1-1");

tree.root.add("자식2");
tree.root.children[1].add("2-1");
tree.root.children[1].add("2-2");
tree.root.children[1].add("2-3");

tree.root.add("자식3");
tree.root.children[2].add("3-1");
tree.root.children[2].add("3-2");

tree.root.add("자식4");
tree.root.children[3].add("4-1");

tree.BFS(findNodeCallback);
console.log("--------------------");
tree.DFS(findNodeCallback);
