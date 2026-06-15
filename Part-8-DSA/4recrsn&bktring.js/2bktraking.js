//========================================================================
// Backtracking (uses recursion)
// ├── Subsets
// ├── Permutations
// ├── Combinations
// ├── Combination Sum
// ├── N Queens
// ├── Sudoku Solver
// └── Maze Problems
//========================================================================
// Subsets - Generate all subsets of an array.
function subsets(nums) {
  const result = [];

  function backtrack(index, current) {
    if (index === nums.length) {
      result.push([...current]);
      return;
    }

    // Take
    current.push(nums[index]);
    backtrack(index + 1, current);

    // Undo
    current.pop();

    // Skip
    backtrack(index + 1, current);
  }

  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));
//========================================================================
// Permutations
function permutations(nums) {
  const result = [];

  function backtrack(current) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    for (let num of nums) {
      if (current.includes(num)) continue;

      current.push(num);

      backtrack(current);

      current.pop();
    }
  }

  backtrack([]);
  return result;
}

console.log(permutations([1, 2, 3]));
//========================================================================
// Combinations (n choose k)
function combine(n, k) {
  const result = [];

  function backtrack(start, current) {
    if (current.length === k) {
      result.push([...current]);
      return;
    }

    for (let i = start; i <= n; i++) {
      current.push(i);

      backtrack(i + 1, current);

      current.pop();
    }
  }

  backtrack(1, []);
  return result;
}

console.log(combine(4, 2));
//========================================================================
// Combination Sum
function combinationSum(candidates, target) {
  const result = [];

  function backtrack(start, current, total) {
    if (total === target) {
      result.push([...current]);
      return;
    }

    if (total > target) return;

    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);

      backtrack(i, current, total + candidates[i]);

      current.pop();
    }
  }

  backtrack(0, [], 0);

  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
//========================================================================
// N Queens
function solveNQueens(n) {
  const result = [];
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill("."));

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }

    return true;
  }

  function backtrack(row) {
    if (row === n) {
      result.push(board.map(r => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) continue;

      board[row][col] = "Q";

      backtrack(row + 1);

      board[row][col] = ".";
    }
  }

  backtrack(0);

  return result;
}

console.log(solveNQueens(4));
//========================================================================
// Sudoku Solver
function solveSudoku(board) {
  function isValid(row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) return false;
      if (board[i][col] === num) return false;
    }

    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num) return false;
      }
    }

    return true;
  }

  function backtrack() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === ".") {
          for (let num = 1; num <= 9; num++) {
            const val = String(num);

            if (isValid(row, col, val)) {
              board[row][col] = val;

              if (backtrack()) return true;

              board[row][col] = ".";
            }
          }

          return false;
        }
      }
    }

    return true;
  }

  backtrack();
}
//========================================================================
// Maze Solver
function mazeSolver(maze) {
  const rows = maze.length;
  const cols = maze[0].length;

  function dfs(r, c) {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      maze[r][c] !== 0
    ) {
      return false;
    }

    if (r === rows - 1 && c === cols - 1) {
      maze[r][c] = 2;
      return true;
    }

    maze[r][c] = 2;

    if (
      dfs(r + 1, c) ||
      dfs(r - 1, c) ||
      dfs(r, c + 1) ||
      dfs(r, c - 1)
    ) {
      return true;
    }

    // Backtrack
    maze[r][c] = 0;

    return false;
  }

  dfs(0, 0);

  return maze;
}

const maze = [
  [0,0,1],
  [1,0,1],
  [0,0,0]
];

console.log(mazeSolver(maze));
//========================================================================
// Backtracking Template Behind All of Them
function backtrack(state) {
  if (goalReached) {
    saveAnswer();
    return;
  }

  for (let choice of choices) {
    makeChoice(choice);

    backtrack(newState);

    undoChoice(choice);
  }
}
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================
//========================================================================

