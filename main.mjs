import { DoublyLinkedList } from "./DoublyLinkedList.mjs";
import { Node } from "./Node.mjs";

function runTests() {
  const doublyLinkedList = new DoublyLinkedList();
  
  console.log("=== Test Push and Pop Operations ===");
  // Push nodes with values 1, 2, 3
  doublyLinkedList.push(1);
  doublyLinkedList.push(2);
  doublyLinkedList.push(3);
  
  // Print the list
  doublyLinkedList.print(); // Expected output: null<-1<->2<->3->null
  
  // Pop all nodes
  doublyLinkedList.pop();
  doublyLinkedList.pop();
  doublyLinkedList.pop();
  
  // Print the list
  doublyLinkedList.print(); // Expected output: List is empty

  console.log("=== Test Unshift and Shift Operations ===");
  // Unshift nodes with values 4, 5, 6
  doublyLinkedList.unshift(4);
  doublyLinkedList.unshift(5);
  doublyLinkedList.unshift(6);
  
  // Print the list
  doublyLinkedList.print(); // Expected output: null<-6<->5<->4->null
  
  // Shift all nodes
  doublyLinkedList.shift();
  doublyLinkedList.shift();
  doublyLinkedList.shift();
  
  // Print the list
  doublyLinkedList.print(); // Expected output: List is empty

  console.log("=== Test Get Operation ===");
  // Add nodes for testing get(index)
  doublyLinkedList.push(1);
  doublyLinkedList.push(2);
  doublyLinkedList.push(3);
  doublyLinkedList.push(4);
  
  // Get values at specific indices
  const val1 = doublyLinkedList.get(0);
  const val2 = doublyLinkedList.get(1);
  const val3 = doublyLinkedList.get(2);
  const val4 = doublyLinkedList.get(3);
  
  console.log(`Get values: ${val1}, ${val2}, ${val3}, ${val4}`); // Expected output: 1, 2, 3, 4

  console.log("=== Test Set Operation ===");
  // Set new values at specific indices
  doublyLinkedList.set(0, 11);
  doublyLinkedList.set(1, 22);
  doublyLinkedList.set(2, 33);
  doublyLinkedList.set(3, 44);
  
  // Print the list
  doublyLinkedList.print(); // Expected output: null<-11<->22<->33<->44->null

  console.log("=== Test Insert Operation ===");
  // Insert values at specific positions
  doublyLinkedList.insert(0, 66); // Insert at head
  doublyLinkedList.insert(3, 55); // Insert in the middle
  doublyLinkedList.insert(6, 77); // Insert at tail
  
  // Print the list
  doublyLinkedList.print(); // Expected output: null<-66<->11<->22<->55<->33<->44<->77->null

  console.log("=== Test Remove Operation ===");
  // Remove nodes at specific positions
  doublyLinkedList.remove(0); // Remove head
  doublyLinkedList.remove(2); // Remove middle
  doublyLinkedList.remove(4); // Remove tail
  
  // Print the list
  doublyLinkedList.print(); // Expected output: null<-11<->22<->33<->44->null
}

runTests();
