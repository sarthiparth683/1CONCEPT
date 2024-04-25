// forEach method Qn:1
// input
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
];
// output
// output should look like this.
// "sentence 1 contains 9 words."

// function countWords(sentences) {
//     sentences.forEach((sentence, index) => {
//         const words = sentence.split(' ').filter(Boolean).length;
//         let output = (`sentence ${index + 1} contains ${words} words.`);
//         console.log(output)
//     });
// }
// countWords(sentences);

//////////////////////////////////////////////////////////////////////////////////////

function countWords(sentences) {
    sentences.forEach((e, i) => {
        let str = e.trim();
        const words = str.split(' ');
        const filteredWords = words.filter(word => word.length > 0);
        let number = filteredWords.length;
        let output = `sentence ${i + 1} contains ${number} words.`
        console.log(output)
    });
}
countWords(sentences);


