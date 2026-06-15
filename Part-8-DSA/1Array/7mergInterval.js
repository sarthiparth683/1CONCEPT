// Merge Intervals -  [1,3] and [2,6] overlap → merge into [1,6]

function merge(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1];

    if (current[0] <= last[1]) {
      // Merge
      last[1] = Math.max(last[1], current[1]);
    } else {
      // No overlap
      result.push(current);
    }
  }

  return result;
}

let arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(arr));
// ==================================================================