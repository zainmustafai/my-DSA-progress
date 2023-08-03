class SinglyLinkedList {
  constructor() {
    console.log("linked list created. ");
    this.head = null;
  }
  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  add(data) {
    let node = new Node(data);
    console.log(node.data);
    if (this.isEmpty()) {
      this.head = node;
      console.log("Appended on start,", this.head.data);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      console.log("Appended on last,", current.next.data);
    }
  }

  delete() {
    if (this.isEmpty()) return;
    if (this.head.next === null) {
      console.log('deleting..',this.head);
      this.head = null;
      return
    } else {
      console.log("Deleting...", this.head);
      this.head = this.head.next;
      return
    }
  }

  read() {
    let current = this.head;
    console.log("Reading the list ...");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
} // class ends

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    console.log("node created", this);
  }
}

const main = () => {
  let list = new SinglyLinkedList();
  list.add(1);
  list.add(2);
  list.read();
  list.delete();
  list.delete();
};

main();

/**
 * The basic operations in the linked lists are insertion, deletion, searching, display, and deleting an element at a given key. These operations are performed on Singly Linked Lists as given below −

Insertion − Adds an element at the beginning of the list.

Deletion − Deletes an element at the beginning of the list.

Display − Displays the complete list.

Search − Searches an element using the given key.

Delete − Deletes an element using the given key.
 * 
 */
