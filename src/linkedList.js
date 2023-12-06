class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    //create a new node
    var node = new Node(value);
    //to store the current node
    var current;
    //if list is Empty add the element and make it head
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      current = this.head;

      //iterate to the end of the list
      while (current.nextNode) {
        current = current.nextNode;
      }
      //add node
      current.nextNode = node;
      this.tail = node;
    }
    this.size++;
    return this;
  }

  prepend(value) {
    //create a new node
    var node = new Node(value);

    //to store the old head
    var oldHead;

    //if list is Empty add the element and make it head
    if (this.head == null) {
      this.head = node;
    } else {
      oldHead = this.head;
      this.head = node;
      node.nextNode = oldHead;
    }
    this.size++;
    return;
  }

  size() {
    return this.size;
  }

  tail() {
    return this.tail;
  }

  at(key) {
    var current = this.head;
    if (key > this.size - 1) {
      console.log("Number entered is larger than list length");
      return "ERROR";
    } else if (key == 0) {
      return current;
    } else {
      for (let index = 0; index < key; index++) {
        current = current.nextNode;
      }
      return current;
    }
  }

  pop() {
    var previous;

    var current;
    //if list is Empty return
    if (this.head == null) {
      return;
    } else {
      current = this.head;

      //iterate to the end of the list
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
      }
      //remove link
      previous.nextNode = null;
      this.tail = previous;
    }
    this.size--;
    return;
  }
}

let myList = new LinkedList();
myList.append(20);
myList.append(50);
myList.prepend(10);
console.log("The current list size is: " + myList.size);
console.log(myList.tail);
console.log(myList.at(2));
myList.pop();
console.log("The current list size is: " + myList.size);
