export default class Node {
  constructor(value, nextNode) {
    value === null ? (this.value = null) : (this.value = value);
    nextNode === null ? (this.nextNode = null) : (this.nextNode = nextNode);
  }
}
