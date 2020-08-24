class HashTable {
  constructor(size) {
    if (size) {
      this.size = size;
    } else {
      this.size = 10;
    }
    this.database = Array(this.size);
  }

  getHash(key) {
    return key % this.size;
  }

  insert(key, value) {
    const index = this.getHash(key);
    if (this.database[index] === undefined) {
      this.database[index] = [value];
    } else {
      this.database[index].push(value);
    }
  }

  delete(key) {
    const index = this.getHash(key);
    if (this.database[index] === undefined) {
      return;
    } else {
      this.database[index].pop();
    }
  }
}

const hashTable = new HashTable();
hashTable.insert(5, 1);
hashTable.insert(15, 2);
hashTable.insert(237, 3);
hashTable.delete(655);
console.log(hashTable.database);
