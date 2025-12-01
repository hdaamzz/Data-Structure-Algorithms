class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size).fill(null);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let ch of key) total += ch.charCodeAt(0);
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    let head = this.table[index];

    if (!head) {
      this.table[index] = new Node(key, value);
      return;
    }

    let curr = head;
    while (curr) {
      if (curr.key === key) {
        curr.value = value;
        return;
      }
      if (!curr.next) break;
      curr = curr.next;
    }

    curr.next = new Node(key, value); 
  }

  get(key) {
    const index = this.hash(key);
    let curr = this.table[index];

    while (curr) {
      if (curr.key === key) return curr.value;
      curr = curr.next;
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    let curr = this.table[index];
    let prev = null;

    while (curr) {
      if (curr.key === key) {
        if (prev === null) {
          this.table[index] = curr.next; 
        } else {
          prev.next = curr.next; 
        }
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      let curr = this.table[i];
      let chain = [];

      while (curr) {
        chain.push(`${curr.key}:${curr.value}`);
        curr = curr.next;
      }

      if (chain.length > 0) console.log(i, chain);
    }
  }

  loadFactor() {
    let entries = 0;

    for (let bucket of this.table) {
      let curr = bucket;
      while (curr) {
        entries++;
        curr = curr.next;
      }
    }

    return entries / this.size;
  }
}

const table = new HashTable(5);

table.set("name", "shafi");
table.set("nema", 54);
table.set("2", 34);

table.display();
console.log("Load factor:", table.loadFactor());
