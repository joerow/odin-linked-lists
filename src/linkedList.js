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

  contains(key) {
    var current;

    //if list is Empty return false
    if (this.head == null) {
      console.log("list is empty");
    } else {
      current = this.head;
      //iterate to the end of the list
      while (current.nextNode) {
        if (current.value == key) {
          return console.log("TRUE");
        } else {
          current = current.nextNode;
        }
      }
      return console.log("FALSE");
    }
  }

  find(key) {
    let index = 0;
    var current;

    //if list is Empty return false
    if (this.head == null) {
      console.log("list is empty");
    } else {
      current = this.head;
      //iterate to the end of the list
      while (current.nextNode) {
        if (current.value == key) {
          return console.log(index);
        } else {
          current = current.nextNode;
          index++;
        }
      }
      return console.log("Not in list");
    }
  }

  toString() {
    let string = "";
    var current;

    //if list is Empty return false
    if (this.head == null) {
      console.log("list is empty");
    } else {
      current = this.head;
      //iterate to the end of the list
      while (current.nextNode) {
        string += "(" + current.value.toString() + ") -> ";
        current = current.nextNode;
      }
      string += "(" + current.value.toString() + ")";
    }
    return console.log(string);
  }

  insertAt(value, index) {
    //create a new node
    var node = new Node(value);
    var previousNode;
    var current = this.head;
    var nextNode;
    let listIndex = 0;

    if (index > this.size) {
      console.log("Number entered is larger than list length");
      return "ERROR";
    }
    if (this.head == null) {
      this.head = node;
    } else if (index == this.size) {
      this.append(value);
    } else if (index == 0) {
      this.prepend(value);
    } else {
      while (listIndex < index) {
        current = current.nextNode;
        listIndex++;
      }
      node.nextNode = current.nextNode;
      current.nextNode = node;
      this.size++;
    }
  }
  removeAt(index) {
    var previousNode;
    var current = this.head;
    var nextNode;
    let listIndex = 0;

    if (index > this.size) {
      console.log("Number entered is larger than list length");
      return "ERROR";
    }
    if (index == this.size) {
      this.pop();
    } else if (index == 0) {
      this.head = current.nextNode;
    } else {
      while (listIndex < index) {
        previousNode = current;
        nextNode = current.nextNode;
        current = current.nextNode;
        listIndex++;
      }
      previousNode.nextNode = current.nextNode;
      this.size--;
    }
  }
}

let myList = new LinkedList();
myList.append(20);
myList.append(50);
myList.prepend(10);
myList.prepend(9);
myList.prepend(8);
console.log("The current list size is: " + myList.size);
console.log(myList.tail);
console.log(myList.at(2));
myList.pop();
console.log("The current list size is: " + myList.size);
