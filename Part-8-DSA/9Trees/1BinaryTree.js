// ==========================================
// 1. THE NODE CLASS
// ==========================================
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// ==========================================
// 2. THE BINARY SEARCH TREE CLASS
// ==========================================
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // --- BST Basics: Insertion ---
  insert(value) {
    const newNode = new Node(value);
    
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;
    
    while (true) {
      // Ignore exact duplicates
      if (value === current.value) return undefined;
      
      // Go Left
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } 
      // Go Right
      else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // --- Breadth-First Search (Level Order) ---
  BFS() {
    let node = this.root;
    const data = [];   
    const queue = [];  
    
    if (node === null) return data;

    queue.push(node); 
    
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.value);
      
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    
    return data;
  }

  // --- Depth-First Search: Pre-Order ---
  // Order: Root -> Left -> Right
  DFSPreOrder() {
    const data = [];
    
    function traverse(node) {
      if (!node) return;
      data.push(node.value); 
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    
    traverse(this.root);
    return data;
  }

  // --- Depth-First Search: Post-Order ---
  // Order: Left -> Right -> Root
  DFSPostOrder() {
    const data = [];
    
    function traverse(node) {
      if (!node) return;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value); 
    }
    
    traverse(this.root);
    return data;
  }

  // --- Depth-First Search: In-Order ---
  // Order: Left -> Root -> Right
  // (Returns values sorted in ascending order for a BST)
  DFSInOrder() {
    const data = [];
    
    function traverse(node) {
      if (!node) return;
      if (node.left) traverse(node.left);
      data.push(node.value); 
      if (node.right) traverse(node.right);
    }
    
    traverse(this.root);
    return data;
  }
}

// ==========================================
// 3. EXECUTION AND TESTING
// ==========================================

const tree = new BinarySearchTree();

// Build the Tree
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// Print the Results
console.log("BFS (Level-Order):", tree.BFS());                 // Expected: [10, 6, 15, 3, 8, 20]
console.log("DFS Pre-Order:    ", tree.DFSPreOrder());   // Expected: [10, 6, 3, 8, 15, 20]
console.log("DFS Post-Order:   ", tree.DFSPostOrder()); // Expected: [3, 8, 6, 20, 15, 10]
console.log("DFS In-Order:     ", tree.DFSInOrder());     // Expected: [3, 6, 8, 10, 15, 20]