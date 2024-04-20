
let table = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
for (let i = 0; i < table.length; i++) {
    console.log(table[i] / 2);
};


// Finding Maximum scores
var scores = [87, 92, 78, 94, 89];
var maxScore = scores[0];
var minScore = scores[0];
for (var i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
        maxScore = scores[i];
    }
    if (scores[i] < minScore) {
        minScore = scores[i];
    }
};
console.log("Maximum Score:", maxScore);
console.log("Minimum Score:", minScore);


