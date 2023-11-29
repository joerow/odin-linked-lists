import Node from "./node";

export class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (LinkedList.listHead === null) {
    }
    Node(value);
  }
}

let myList = new LinkedList();
console.log(LinkedList);
