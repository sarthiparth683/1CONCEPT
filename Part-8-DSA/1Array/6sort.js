// ====================================================================
// Bubble
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break; // already sorted — early exit
  }

  return arr;
}

// Usage
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// ====================================================================
// Selection Sort
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

// Usage
console.log(selectionSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// ====================================================================
// insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    // shift elements right until we find key's position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Usage
console.log(insertionSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// ====================================================================
// Merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left  = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  // append remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Usage
console.log(mergeSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// ====================================================================
// Quick Sort
function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo < hi) {
    const pivotIdx = partition(arr, lo, hi);
    quickSort(arr, lo, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, hi);
  }
  return arr;
}

function partition(arr, lo, hi) {
  // optional: swap random element to hi to avoid O(n²) on sorted input
  // const rand = lo + Math.floor(Math.random() * (hi - lo + 1));
  // [arr[rand], arr[hi]] = [arr[hi], arr[rand]];

  const pivot = arr[hi];
  let i = lo - 1;

  for (let j = lo; j < hi; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
  return i + 1;
}

// Usage
console.log(quickSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// ====================================================================
// Heap sort
function heapSort(arr) {
  const n = arr.length;

  // step 1: build max-heap (heapify from last non-leaf up to root)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // step 2: extract max one by one
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // move current max to end
    heapify(arr, i, 0);                  // re-heapify reduced heap
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left  = 2 * i + 1;
  const right = 2 * i + 2;

  if (left  < n && arr[left]  > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest); // recursively fix the affected subtree
  }
}

// Usage
console.log(heapSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// ====================================================================
