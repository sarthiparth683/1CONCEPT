//  Insertion at Beginning:
// Algorithm insertAtBeginning(data):
//     newNode = createNode(data)
//     if head is null:
//         head = newNode
//         tail = newNode
//     else:
//         newNode.next = head
//         head = newNode
 //-----------------------------------------------------------------------------------------------------

// Insertion at End:
// Algorithm insertAtEnd(data):
//     newNode = createNode(data)
//     if head is null:
//         head = newNode
//         tail = newNode
//     else:
//         tail.next = newNode
//         tail = newNode
 //-----------------------------------------------------------------------------------------------------

// Insertion at Middle (after a given node):
// Algorithm insertAfterNode(prevNode, data):
//     if prevNode is null:
//         return "Previous node cannot be null"
    
//     newNode = createNode(data)
//     newNode.next = prevNode.next
//     prevNode.next = newNode
 //-----------------------------------------------------------------------------------------------------

// Deletion at Beginning:
// Algorithm deleteAtBeginning():
//     if head is null:
//         return "List is empty"
//     else:
//         temp = head
//         head = head.next
//         free temp
 //-----------------------------------------------------------------------------------------------------

// Deletion at End:
// Algorithm deleteAtEnd():
//     if head is null:
//         return "List is empty"
//     elif head = tail:
//         free head
//         head = null
//         tail = null
//     else:
//         temp = head
//         while temp.next.next is not null:
//             temp = temp.next
//         free temp.next
//         temp.next = null
 //-----------------------------------------------------------------------------------------------------

// Deletion of a Node:
// Algorithm deleteNode(key):
//     temp = head
//     if temp is not null and temp.data = key:
//         head = temp.next
//         free temp
//         return
    
//     prev = null
//     while temp is not null and temp.data != key:
//         prev = temp
//         temp = temp.next
    
//     if temp is null:
//         return "Key not found"
    
//     prev.next = temp.next
//     free temp
 
 //-----------------------------------------------------------------------------------------------------
//  Creating a single node example:
// const singleNode = { value: 10, next: null };
// console.log(singleNode.value);  // prints 10
// console.log(singleNode.next);   // prints null
 //-------------------------------------------------
// Creating and connecting two nodes:
// let firstNode = new LinkedListNode(10);
// let secondNode = new LinkedListNode(20);
// firstNode.next = secondNode;
// let head = firstNode;
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Inserting a Node at the Head
// New node inserted becomes the head, and its next pointer references the previous head.
// Example: Insert 30 at head, then 20 at head, final list: 30 → 20 → 10 → null
// Code snippet:

// function insertNodeAtHead(head, data) {
//     let newNode = new LinkedListNode(data);
//     newNode.next = head;
//     return newNode;
// }
// head = null;
// head = insertNodeAtHead(head, 10);
// head = insertNodeAtHead(head, 20);
// head = insertNodeAtHead(head, 30);
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Traversing a Linked List

// function traverseLinkedList(head) {
//     let current = head;
//     while (current !== null) {
//         console.log(current.data);
//         current = current.next;
//     }
// }

//-----------------------------------------------------------------------------------------------------
// Deleting a Node at the Beginning

// function deleteAtBeginning(head) {
//     if (!head) {
//         console.log("List is already empty.");
//         return null;
//     }
//     return head.next;
// }

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Problem Name : Find the middle node in a single linked list
// Approach-1. Counting Nodes and Traversing Again
// function findMiddle(head) {
//     let count = 0;
//     let current = head;

//     // First pass to count nodes
//     while (current !== null) {
//         count++;
//         current = current.next;
//     }

//     // Reset current for second pass
//     current = head;
//     let middleIndex = Math.floor(count / 2);

//     // Second pass to find middle node
//     for (let i = 0; i < middleIndex; i++) {
//         current = current.next;
//     }

//     return current;
// }
//------------------------------------------------------------------

// Approach-2. Using Two Pointers (Fast and Slow Pointer Technique)
// function findMiddle(head) {
//     let slowPointer = head;
//     let fastPointer = head;

//     while (fastPointer !== null && fastPointer.next !== null) {
//         slowPointer = slowPointer.next;
//         fastPointer = fastPointer.next.next;
//     }

//     return slowPointer;
// }

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Problem Name : Reverse the Single Linked List
// function reverseLinkedList(head) {
//     let prev = null;
//     let current = head;

//     while (current !== null) {
//         let nextNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextNode;
//     }

//     return prev;
// }

//-----------------------------------------------------------------------------------------------------
// Problem Name : Detect Loop / Cycle in a linked list
// function detectCycle(head) {
//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             return true;
//         }
//     }

//     return false;
// }

//-----------------------------------------------------------------------------------------------------
// Problem Name : Nth node from end

// function nthNodeFromEnd(head, n) {
//     let slow = head;
//     let fast = head;

//     // Move fast pointer n steps ahead
//     for (let i = 0; i < n - 1; i++) {
//         if (fast === null) {
//             // n is greater than the number of nodes
//             return null;
//         }
//         fast = fast.next;
//     }

//     // Move both pointers until fast reaches the end
//     while (fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next;
//     }

//     // At this point, slow is at the nth node from the end
//     return slow;
// }

//-----------------------------------------------------------------------------------------------------
// Problem Name : Add 1 to the single linked list 
// function addOneToLinkedList(head) {
//     // Reverse the linked list
//     let reversedHead = reverseLinkedList(head);

//     let current = reversedHead;
//     let carry = 1;  // We are adding 1

//     while (current !== null && carry > 0) {
//         let total = current.value + carry;
//         current.value = total % 10;  // Update the current node value
//         carry = Math.floor(total / 10);  // Update carry for next iteration

//         if (carry > 0 && current.next === null) {
//             // If carry remains and we reach the end, add a new node
//             current.next = new ListNode(carry);
//             break;
//         }

//         current = current.next;
//     }

//     // Reverse the list back to its original order
//     return reverseLinkedList(reversedHead);
// }

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Road side coder
// Linked List in Javascript

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   addFirst(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   addLast(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }

//     current.next = newNode;
//   }

//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }

//   addAt(index, data) {
//     if (index < 0 || index > this.size()) {
//       console.error("Invalid Index");
//       return;
//     }

//     const newNode = new Node(data);
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }

//     newNode.next = current.next;
//     current.next = newNode;
//   }

//   removeTop() {
//     if (!this.head) {
//       return;
//     }

//     this.head = this.head.next;
//   }

//   removeLast() {
//     if (!this.head) {
//       return;
//     }

//     let current = this.head;
//     while (current.next.next) {
//       current = current.next;
//     }

//     current.next = null;
//   }

//   removeAt(index) {
//     if (index < 0 || index > this.size()) {
//       console.error("Invalid Index");
//       return;
//     }

//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }

//     let current = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       current = current.next;
//     }

//     if (current.next) {
//       current.next = current.next.next;
//     }
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }

// const linkedlist = new LinkedList();

// linkedlist.addFirst(5);
// linkedlist.addFirst(3);
// linkedlist.addFirst(8);
// linkedlist.addLast(6);

// linkedlist.removeTop();

// linkedlist.addAt(2, 8);

// linkedlist.removeLast();
// linkedlist.removeAt(2);

// linkedlist.print();
// console.log("size = " + linkedlist.size());

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Ques 1 : Given the head of a singly linked list, return true if it is
// a palindrome or false otherwise

// Input: head = [1,2,2,1]      ----->>>>>      Output: true;
// Input: head = [1,2]          ----->>>>>      Output: false;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Solution:- 
// var isPalindrome = function (head) {
//   let string1 = (string2 = "");
//   let node = head;

//   while (node != null) {
//     string1 = `${string1}${node.val}`;
//     string2 = `${node.val}${string2}`;
//     node = node.next;
//   }
//   return string1 === string2;
// };
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Ques 2 : Given the head of a singly linked list, reverse the list, and
// return the reversed list.

// Input: head = [1,2]      ----->>>>>      Output: [2,1];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// Solution:-
// var reverseList = (head) => {
//   let prev = null;
//   let current = head;
//   while (current !== null) {
//     const nextNode = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextNode;
//   }
//   return prev;
// };
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------