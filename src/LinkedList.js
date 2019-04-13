class Node {
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}

class LinkedList {
  end = null;
  start = null;
  insert(item) {
    if (!this.end) {
      this.end = new Node(item, null);
      this.start = this.end;
    } else {
      this.end.next = new Node(item, null);
      this.end = this.end.next;
    }
  }
  print(node = this.start) {
    console.log(node.item);
    if (node.next) {
      this.print(node.next);
    }
  }
  printElementFromLast(k, node = this.start) {
    let index;
    if (node.next) {
      index = this.printElementFromLast(k, node.next);
    } else if (!node.next && k === 1) {
      console.log(node);
    } else {
      return 1;
    }
    if (index + 1 === k) {
      console.log(node);
    }
    return index + 1;
  }
}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.printElementFromLast(1);
