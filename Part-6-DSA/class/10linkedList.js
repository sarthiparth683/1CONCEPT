// Creating and connecting two nodes:
// let head = null;
// let firstNode = {
//   value: 10,
//   next: null,
// };

// head = firstNode;
// let secondNode = {
//   value: 20,
//   next: null,
// };

// firstNode.next = secondNode;
// console.log(firstNode)
// console.log(head.value);
// console.log(head.next)
// console.log(head.next.value)
// console.log(head.next.next)
//-----------------------------------------------------------------------------------------
// insert node at head
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };
// // let firstNode = new LinkedListNode(10);
// // console.log(firstNode)
// // console.log(firstNode.data)
// function insertNodeAtHead(head, data) {
//   let newNode = new LinkedListNode(data);
//   newNode.next = head;
//   return newNode;
// }
// let head = null;
// head = insertNodeAtHead(head, 10);
// head = insertNodeAtHead(head, 20);
// console.log(head);
// console.log(head.data);
// console.log(head.next.data);
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Traversing a Linked List
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };
// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// // console.log(head)
// // console.log(head.next)
// // console.log(head.next.data)

// function traverseLinkedList(head) {
//     let current = head;
//     while (current !== null) {
//         console.log(current.data);
//         current = current.next;
//     }
// }
// traverseLinkedList(head)
//-----------------------------------------------------------------------------------
// inserting node at position

// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// function insertNodeAtPosition(head, data, position) {
//   const newnode = new LinkedListNode(data);
//   if (position === 0) {
//     newnode.next = head;
//     return newnode;
//   }
//   let current = head;
//   let currIndex = 0;
//   while (current != null && currIndex < position - 1) {
//     current = current.next;
//     currIndex++;
//   }
//   if (current == null) {
//     console.log("Position out of Range");
//     return head;
//   }
//   newnode.next = current.next;
//   current.next = newnode;
//   return head;
// }

// function traverseLinkedList(head) {
//   let current = head;
//   while (current !== null) {
//     console.log(current.data);
//     current = current.next;
//   }
// }

// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// head = insertNodeAtPosition(head, 15, 2);
// traverseLinkedList(head);

//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
// Deleting a Node at the Beginning

// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// function deleteAtBeginning(head) {
//     if (!head) {
//         console.log("List is already empty.");
//         return null;
//     }
//     return head.next;
// }
// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// head = deleteAtBeginning(head);
//-----------------------------------------------------------------------------------------------------

// Deleting a Node at the end

// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// function deleteAtEnd(head) {
//   if (head == null) {
//     console.log("List is empty. Nothing to delete");
//     return null;
//   }
//   if (head.next == null) {
//     return null;
//   }

//   let current = head;
//   while (current.next.next != null) {
//     current = current.next;
//   }
//   current.next = null;
//   return head;
// }

// function traverseLinkedList(head) {
//   let current = head;
//   while (current !== null) {
//     console.log(current.data);
//     current = current.next;
//   }
// }
// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// traverseLinkedList(head);
// head = deleteAtEnd(head);
// console.log("-------------");
// traverseLinkedList(head);
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// Problem Name : Find the middle node in a single linked list
// Approach-1. Counting Nodes and Traversing Again

// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// function findMiddle(head) {
//   let count = 0;
//   let current = head;
//   // First pass to count nodes
//   while (current !== null) {
//     count++;
//     current = current.next;
//   }
//   // Reset current for second pass
//   current = head;
//   let middleIndex = Math.floor(count / 2);
//   // Second pass to find middle node
//   for (let i = 0; i < middleIndex; i++) {
//     current = current.next;
//   }
//   return current;
// }

// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// head.next.next.next = new LinkedListNode(40);
// head.next.next.next.next = new LinkedListNode(50);
// let middle = findMiddle(head);
// console.log(middle.data);
//------------------------------------------------------------------

// Approach-2. Using Two Pointers (Fast and Slow Pointer Technique)
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };
// function findMiddle(head) {
//   let slowPointer = head;
//   let fastPointer = head;

//   while (fastPointer !== null && fastPointer.next !== null) {
//     slowPointer = slowPointer.next;
//     fastPointer = fastPointer.next.next;
//   }

//   return slowPointer;
// }
// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// head.next.next.next = new LinkedListNode(40);
// head.next.next.next.next = new LinkedListNode(50);
// let middle = findMiddle(head);
// console.log(middle.data);
//-------------------------------------------------------------------------------

// Problem Name : Reverse the Single Linked List
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

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

// function traverseLinkedList(head) {
//   let current = head;
//   while (current !== null) {
//     console.log(current.data);
//     current = current.next;
//   }
// }

// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// head.next.next.next = new LinkedListNode(40);
// head.next.next.next.next = new LinkedListNode(50);
// traverseLinkedList(head)
// head = reverseLinkedList(head);
// console.log("----------------")
// traverseLinkedList(head)
//---------------------------------------------------------------------------------

// Problem Name : Detect Loop / Cycle in a linked list
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// function detectCycle(head) {
//   if (head == null) {
//     return null;
//   }
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true;
//     }
//   }

//   return false;
// }
// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// head.next.next.next = new LinkedListNode(40);
// head.next.next.next.next = new LinkedListNode(50);
// head.next.next.next.next.next = head;
// console.log(detectCycle(head));
//------------------------------------------------------------------------------

// Problem Name : Nth node from end
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };
// function nthNodeFromEnd(head, n) {
//   if (n <= 0) {
//     return null;
//   }
//   let slow = head;
//   let fast = head;
//   // Move fast pointer n steps ahead
//   for (let i = 0; i < n - 1; i++) {
//     if (fast === null) {
//       // n is greater than the number of nodes
//       return null;
//     }
//     fast = fast.next;
//   }
//   // Move both pointers until fast reaches the end
//   while (fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   // At this point, slow is at the nth node from the end
//   return slow;
// }
// let head = new LinkedListNode(10);
// head.next = new LinkedListNode(20);
// head.next.next = new LinkedListNode(30);
// head.next.next.next = new LinkedListNode(40);
// head.next.next.next.next = new LinkedListNode(50);
// let nthNode = nthNodeFromEnd(head, 2);
// console.log(nthNode.data);
//---------------------------------------------------------------------------------
// Problem Name : Add 1 to the single linked list
// const LinkedListNode = class {
//   constructor(nodeData) {
//     this.data = nodeData;
//     this.next = null;
//   }
// };

// function reverseLinkedList(head) {
//   let prev = null;
//   let current = head;

//   while (current !== null) {
//     let next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   return prev;
// }

// function addOne(head) {
//   let current = head;
//   let carry = 1;
//   let prev = null;

//   while (current !== null) {
//     let sum = current.data + carry;
//     current.data = sum % 10;
//     carry = Math.floor(sum / 10);
//     prev = current;
//     current = current.next;
//   }

//   if (carry > 0) {
//     prev.next = new LinkedListNode(carry);
//   }
// }

// function traverseLinkedList(head) {
//   let current = head;
//   while (current !== null) {
//     console.log(current.data);
//     current = current.next;
//   }
// }

// function addOneToLinkedList(head) {
//   head = reverseLinkedList(head);
//   addOne(head);
//   head = reverseLinkedList(head);
//   return head;
// }

// // Test case: 9 -> 9 -> 9
// let head = new LinkedListNode(9);
// head.next = new LinkedListNode(9);
// head.next.next = new LinkedListNode(9);

// traverseLinkedList(head);
// head = addOneToLinkedList(head);
// console.log("------------");
// traverseLinkedList(head);

//-----------------------------------------------------------------------------
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
