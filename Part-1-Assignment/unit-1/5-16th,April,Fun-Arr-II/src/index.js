// ** you can use the commentout function execution
// to see the output **

// reduce method
// qn:-1
// input
const strings = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "pear",
  "apple",
];
// - output
// { apple: 3, banana: 2, orange: 1, pear: 1 }
function UniqueString(strings) {
  let output = strings.reduce((a, e, i) => {
    if (a[e] == undefined) {
      a[e] = 1;
    } else {
      a[e]++;
    }
    return a
  }, {})
  return output;
}
console.log(UniqueString(strings));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// qn :2
// reduce method
//   input 
const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
// output
// 1817;
function ProductOfMultipleOfThreeOrFive() {
  let sum = numbers.reduce((a, el, i) => {
    if (el % 3 == 0 || el % 5 == 0) {
      a = a + el
    }
    return a
  }, 0)
  return sum
}
console.log(ProductOfMultipleOfThreeOrFive(numbers));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// filter method Qn:1\
// Given an array of strings, write a function that returns a new array containing only the strings that are palindromes (i.e., read the same backwards as forwards) using .filter().
const words = [
  "racecar",
  "hello",
  "deified",
  "world",
  "level",
  "programming",
  "radar",
  "civic",
  "javascript",
];
// - output
// ["racecar", "deified", "level", "radar", "civic"];
function palindromesString(words) {
  let output = [];
  words.filter((e, i) => {
    let str = e;
    let revstr = str.split('').reverse().join('');

    if (str == revstr) {
      output.push(revstr);
    }
  })
  return output;
}
console.log(palindromesString(words));




// filter method Qn:2
// input 
const filePaths = [
  "/images/pic1.jpg",
  "/images/pic2.png",
  "/assets/img/background.jpg",
  "/assets/img/logo.png",
  "/downloads/document.pdf",
  "/downloads/image.png",
  "/downloads/image.jpg",
];
// - output
// [
//   "/images/pic1.jpg",
//   "/images/pic2.png",
//   "/assets/img/background.jpg",
//   "/assets/img/logo.png",
//   "/downloads/image.png",
//   "/downloads/image.jpg",
// ];
function findImage(filepaths) {
  let arr = [];
  filepaths.filter((e, i) => {
    let jpg = e.includes(".jpg")
    let png = e.includes(".png")
    if (jpg || png) {
      arr.push(e);
    }
  })
  return arr;
}
console.log(findImage(filePaths))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// map method Qn:1
// Given an array of strings, write a function that returns a new array where each string has its first and last letters swapped using .map().
// input
const stringss = [
  "Hello",
  "world",
  "this",
  "is",
  "an",
  "example",
  "array",
  "of",
  "strings",
];
// output
// ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"];
// function swapStrings(stringss) {
//   return stringss.map(string => {
//       if (string.length <= 1) return string;
//       return string.charAt(string.length - 1) + string.slice(1, -1) + string.charAt(0);
//   });
// }
// console.log(swapStrings(stringss));

// or method - 2

// function swapStrings(strings) {
//   let ans = strings.map((el, i) => {
//     el = el.split("")
//     let temp = el[0]
//     el[0] = el[el.length - 1]
//     el[el.length - 1] = temp
//     return el.join("")
//   })
//   return ans
// }
// console.log(swapStrings(stringss));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// foreach method Qn:1
// - Given an array of strings representing sentences, write a function that logs `(console.log())` the number of words in each sentence to the console using .forEach()
// - for each sentence print a message `"sentence 1 contains 9 words."` in console.
// - here in the message `1` is index(one base(starts from one)) of the sentence and `9` is the number of words it contains.both the value should be changed as per the sentence.
// - input
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "I have a dream that one day this nation will rise up.",
  "To be or not to be, that is the question.",
  "In the beginning, God created the heavens and the earth.",
];

// - output
// output should look like this.
// "sentence 1 contains 9 words."
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

///////////////////////////////////////////////////////////////////////////////////////////////////

// combination method Qn:1
// - input
const numbers1 = [1, 2, 3, 4, 5, 7];
// - output 
// 84; 
function sumOfSquaresOfOddNumbers(numbers) {
  return numbers
    .filter(number => number % 2 !== 0)
    .map(number => number ** 2)
    .reduce((acc, val) => acc + val, 0);
}
console.log(sumOfSquaresOfOddNumbers(numbers1));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// combination method Qn:2
// messageArray
// - input
let typeOfCourse = [
  { id: 1, name: "Developer" },
  { id: 2, name: "Tester" },
];
let CourseDurationDirectory = {
  1: `6 month`,
  2: `1 year`,
  3: `2 year`,
};
let Category = {
  3: "Fullstack",
  4: "manual tester",
  5: "automation tester",
};
let exampleInputArray = [
  {
    courseName: "masai frontend web26",
    courseDuration: 2,
    Category: 3,
    type: 1,
    techTools: {
      1: "HTML",
      2: "CSS",
      3: "javaScript",
      4: "React",
      5: "Redux",
      6: "Node.js",
      7: "Express",
      8: "MongoDB",
      9: "Bootstrap",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "HTML is the standard markup language for Web pages.",
      2: "CSS is the language we use to style an HTML document. ",
      3: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
      4: "React is a JavaScript library for building user interfaces.",
      5: "Redux is an open-source JavaScript library for managing and centralizing application state.",
      6: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      7: "Express is a minimal and flexible Node.js web application framework .",
      8: "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
      9: "Bootstrap utilizes Sass for a modular and customizable architecture. ",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
  {
    courseName: "foundation batch",
    courseDuration: 2,
    Category: 4,
    type: 2,
    techTools: {
      1: "aptitude",
      2: "GitHub",
      3: "C",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "1. a natural ability or skill: 2. a natural ability or skill:",
      2: "The open source community is the heart of GitHub and fundamental to how we build software today.",
      3: "C is a general-purpose programming language, developed in 1972",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
  {
    courseName: "Java batch",
    courseDuration: 1,
    Category: 5,
    type: 1,
    techTools: {
      1: "ETL",
      2: "Perl",
      3: "C#",
      4: "Python",
      5: "PHP",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    techdetails: {
      1: "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
      2: "Perl is a high-level scripting language",
      3: "C# was originally designed to be easy to learn and use",
      4: "Python is one of the most beginner-friendly programming languages out there.",
      5: "PHP is a scripting language running on the server side",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "",
      15: "",
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
  },
];

// method - 1
function messageArray() {
  let eo1 = exampleInputArray.map((el, i) => {
    // el is big object
    let ans = {};
    
    ans.courseName = el.courseName;
    ans.courseDuration = CourseDurationDirectory[el.courseDuration];
    ans.type = typeOfCourse[el.type - 1].name;
    ans.techTools = [];
    for (const key in el.techTools) {
      if (el.techTools[key] != "" && el.techTools[key] != null) {
        ans.techTools.push({
          language: techTools[key],
          details: el.techdetails[key],
        });
      }
    };
    return ans;
    // return ans.techTools;  // for checking
  });
  return eo1;

}
console.log(messageArray(exampleInputArray));










//method - 2
// function massageArray(inputArray) {
//   return inputArray.map(item => ({
//     courseName: item.courseName,
//     courseDuration: CourseDurationDirectory[item.courseDuration],
//     Category: Category[item.Category],
//     type: typeOfCourse.find(type => type.id === item.type).name,
//     techTools: Object.entries(item.techTools)
//       .filter(([_, value]) => value !== null && value !== "")
//       .map(([key, value]) => ({ language: value, details: item.techdetails[key] })),
//   }));
// }
// console.log(massageArray(exampleInputArray));


// - output
let eo1 = [
  {
    courseName: "masai frontend web26",
    courseDuration: "1 year",
    Category: "Fullstack",
    type: "Developer",
    techTools: [
      {
        language: "HTML",
        details: "HTML is the standard markup language for Web pages.",
      },
      {
        language: "CSS",
        details: "CSS is the language we use to style an HTML document. ",
      },
      {
        language: "javaScript",
        details:
          "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
      },
      {
        language: "React",
        details: "React is a JavaScript library for building user interfaces.",
      },
      {
        language: "Redux",
        details:
          "Redux is an open-source JavaScript library for managing and centralizing application state.",
      },
      {
        language: "Node.js",
        details:
          "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      },
      {
        language: "Express",
        details:
          "Express is a minimal and flexible Node.js web application framework .",
      },
      {
        language: "MongoDB",
        details:
          "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
      },
      {
        language: "Bootstrap",
        details:
          "Bootstrap utilizes Sass for a modular and customizable architecture. ",
      },
    ],
  },
  {
    courseName: "foundation batch",
    courseDuration: "1 year",
    Category: "manual tester",
    type: "Tester",
    techTools: [
      {
        language: "aptitude",
        details:
          "1. a natural ability or skill: 2. a natural ability or skill:",
      },
      {
        language: "GitHub",
        details:
          "The open source community is the heart of GitHub and fundamental to how we build software today.",
      },
      {
        language: "C",
        details:
          "C is a general-purpose programming language, developed in 1972",
      },
    ],
  },
  {
    courseName: "Java batch",
    courseDuration: "6 month",
    Category: "automation tester",
    type: "Developer",
    techTools: [
      {
        language: "ETL",
        details:
          "ETL is used to replicate and auto sync data from various source databases to a cloud data warehouse",
      },
      {
        language: "Perl",
        details: "Perl is a high-level scripting language",
      },
      {
        language: "C#",
        details: "C# was originally designed to be easy to learn and use",
      },
      {
        language: "Python",
        details:
          "Python is one of the most beginner-friendly programming languages out there.",
      },
      {
        language: "PHP",
        details: "PHP is a scripting language running on the server side",
      },
    ],
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








// Implementation methods ps Qn:6
// - input
let subjectsHash = {
  1: "Javascript",
  2: "HTML",
  3: "CSS",
  4: "Java",
  5: "Rust",
};


let students = [
  { id: 1, name: "Prateek", subjectID: 5 },
  { id: 2, name: "Yogesh", subjectID: 2 },
  { id: 3, name: "Nrupul", subjectID: 4 },
  { id: 4, name: "Prateek", subjectID: 1 },
];
// output
// {
//       Prateek: ["Rust", "Javascript"],
//       Yogesh: ["HTML"],
//       Nrupul: ["Java"],
// }

function ImplementationPS6(students, subject) {
  let obj = {};
  obj[students[0].name] = [subjectsHash[5], subjectsHash[1]];
  obj[students[1].name] = [subjectsHash[2]];
  obj[students[2].name] = [subjectsHash[4]];
  return obj;
};
console.log(ImplementationPS6(students, subjectsHash));
//////////////////////////////////////////////////////////////////////////////////////////////



// Implementation methods ps Qn:7
// input
let prateekMarksData = {
  name: "Prateek",
  subject1: "Javascript",
  subject2: "HTML",
  subject3: "CSS",
  subject4: null,
  subject5: null,
  marks1: 90,
  marks2: 81,
  marks3: 80,
  marks4: null,
  marks5: null,
};
let nrupulMarksData = {
  name: "Nrupul",
  subject1: "Java",
  subject2: "Python",
  subject3: null,
  subject4: null,
  subject5: null,
  marks1: 95,
  marks2: 85,
  marks3: null,
  marks4: null,
  marks5: null,
};
// - output
// [
//   {
//     name: "Prateek",
//     marks: [
//       { subject: "Javascript", score: 90 },
//       { subject: "HTML", score: 81 },
//       { subject: "CSS", score: 80 },
//     ],
//   },
//   {
//     name: "Nrupul",
//     marks: [
//       { subject: "Java", score: 95 },
//       { subject: "Python", score: 85 },
//     ],
//   },
// ];
let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
function ImplementationPS7(allStudentsMarksData) {
  return allStudentsMarksData.map(student => ({
    name: student.name,
    marks: Object.entries(student)
      .filter(([key, value]) => key.startsWith("subject") && value !== null)
      .map(([key, value]) => ({ subject: value, score: student[key.replace("subject", "marks")] }))
  }));
}
console.log(ImplementationPS7(allStudentsMarksData));

////////////////////////////////////////////////////////////////////////////////////////////////
// Implementation methods ps Qn:9
// - input
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
// - sample output
// {
//   numYoungVotes: 0,
//   numYoungPeople: 2,
//   numMidVotesPeople: 5,
//   numMidsPeople: 8,
//   numOldVotesPeople: 2,
//   numOldsPeople: 2,
// }
function ImplementationPS9(voters) {
  const result = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  };
  voters.forEach(voter => {
    if (voter.age <= 20) {
      result.numYoungPeople++;
      if (voter.voted) result.numYoungVotes++;
    } else if (voter.age <= 45) {
      result.numMidsPeople++;
      if (voter.voted) result.numMidVotesPeople++;
    } else {
      result.numOldsPeople++;
      if (voter.voted) result.numOldVotesPeople++;
    }
  });
  return result;
}
console.log(ImplementationPS9(voters));







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Implementation methods ps Qn:10
// #### ImplementationPS10
// input
const data = [
  {
    name: "Superman",
    favoriteIceCreams: [
      "Strawberry",
      "Vanilla",
      "Chocolate",
      "Cookies & Cream",
    ],
  },
  {
    name: "Batman",
    favoriteIceCreams: [
      "Cookies & Cream",
      "Mint Chocolate Chip",
      "Chocolate",
      "Vanilla",
    ],
  },
  {
    name: "Flash",
    favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
  },
  {
    name: "Aquaman",
    favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
  },
  {
    name: "Green Lantern",
    favoriteIceCreams: [
      "Vanilla",
      "French Vanilla",
      "Vanilla Bean",
      "Strawberry",
    ],
  },
  {
    name: "Robin",
    favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
  },
];


// - output
// {
//       Strawberry: 3,
//       Vanilla: 4,
//       Chocolate: 5,
//       "Cookies & Cream": 2,
//       "Mint Chocolate Chip": 3,
//       "Rocky Road": 1,
//       Pistachio: 1,
//       Banana: 1,
//       "French Vanilla": 1,
//       "Vanilla Bean": 1,
//     }

// - `ImplementationPS10` function takes `data` array as a input and returns a object with unique `favoriteIceCreams` as key and the value is the count of how many people liked it.
// - as example `Vanilla Bean` only liked by `Green Lantern` so the here the value is `1`.


function ImplementationPS10(data) {
  const iceCreamCounts = {};
  data.forEach(person => {
    person.favoriteIceCreams.forEach(iceCream => {
      iceCreamCounts[iceCream] = (iceCreamCounts[iceCream] || 0) + 1;
    });
  });
  return iceCreamCounts;
}
console.log(ImplementationPS10(data));



///////////////////////////////////////////////////////////////////////////////
// Dont remove below export statement part

export {
  // reruce
  UniqueString,
  ProductOfMultipleOfThreeOrFive,
  // filter
  palindromesString,
  findImage,
  // map
  swapStrings,
  // forEach
  countWords,
  // combination
  sumOfSquaresOfOddNumbers,
  massageArray,
  // Implementation methods problem statement
  ImplementationPS6,
  ImplementationPS7,
  ImplementationPS9,
  ImplementationPS10,
};
