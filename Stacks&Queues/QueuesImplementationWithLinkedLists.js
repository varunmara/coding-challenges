class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.last = newNode;
      this.first = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (!this.first) {
      return;
    }
    if (this.first == this.last) {
      this.last = null;
    }
    let val = this.first;
    this.first = this.first.next;
    this.length--;
    return val;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue("samir");
myQueue.enqueue("matt");
myQueue.enqueue("pavel");
myQueue.peek();

//Joy
//Matt
//Pavel
//Samir
