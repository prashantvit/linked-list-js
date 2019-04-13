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
}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.print();
list.insert(5);
list.insert(6);
list.print();
