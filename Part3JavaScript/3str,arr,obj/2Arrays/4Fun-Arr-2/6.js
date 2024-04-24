// forEach method Qn:1

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
];

function countWords(sentences) {
    sentences.forEach((sentence, index) => {
        const words = sentence.split(' ').filter(Boolean).length;
        console.log(`sentence ${index + 1} contains ${words} words.`);
    });
} 
countWords(sentences);