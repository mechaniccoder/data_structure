class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(data) {
        this.root = new Node(data);
        this.current = this.root;
    }

    // 삽입
    insert(data) {
        if (data < this.current.data) {
            if (this.current.left) {
                this.current = this.current.left;
                this.insert(data);
            } else {
                this.current.left = new Node(data);
                this.current = this.root;
            }
        } else if (data > this.current.data) {
            if (this.current.right) {
                this.current = this.current.right;
                this.insert(data);
            } else {
                this.current.right = new Node(data);
                this.current = this.root;
            }
        } else {
            console.log("노드가 이미 존재합니다.", data);
            this.current = this.root;
        }
    }

    search(data) {
        if (data === this.current.data) {
            console.log("데이터 찾았습니다.", this.current);
            this.current = this.root;
            return;
        }

        if (data < this.current.data) {
            if (this.current.left) {
                this.current = this.current.left;
                this.search(data);
            } else {
                console.log("없는 데이터입니다.");
                this.current = this.root;
                return;
            }
            this.current = this.current.left;
        } else {
            if (this.current.right) {
                this.current = this.current.right;
                this.search(data);
            } else {
                console.log("없는 데이터입니다.");
                this.current = this.root;
                return;
            }
        }
    }
}

const binarySearchTree = new BinarySearchTree(10);
binarySearchTree.insert(15);
binarySearchTree.insert(5);
binarySearchTree.insert(13);
binarySearchTree.insert(3);
binarySearchTree.insert(7);
binarySearchTree.insert(20);
binarySearchTree.insert(14);
binarySearchTree.insert(9);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(1);
binarySearchTree.insert(19);
binarySearchTree.insert(25);

binarySearchTree.search(20);

// console.log(binarySearchTree.root);
