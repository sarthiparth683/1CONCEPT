let CodingAvgMarks
function codingScoreCheck(marks, cutOff) {
  return new Promise((res, rej) => {
    CodingAvgMarks = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
    setTimeout(() => {
      if (CodingAvgMarks >= cutOff) {
        res(CodingAvgMarks);
      } else {
        rej("Sorry you haven't cleared the HUKUMU round.");
      }
    }, 2000);
  });
}

const marks = [80, 90, 75, 85];
const cutoff = 73;
codingScoreCheck(marks, cutoff)
  .then((averageScore) => {
    console.log(  `    Congratulations! Your average scoren of Coding is ${averageScore}, which is greater than or equal to the cutoff score of ${cutoff}.   `
   
    );
  })
  .catch((error) => {
    console.error(error);
  });
