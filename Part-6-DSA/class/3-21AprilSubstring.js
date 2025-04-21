  // 1.
// function checkEvenOdd(number) {
//   if (number % 2 === 0) {
//     __return______ "Even";
//   } else {
//     _____return___ "Odd";
//   }
// }

// let message = checkEvenOdd(7);
// console.____log____(message);


// function multiply(x, y) {
//   return x * y;
// }

// function square(num) {
//   return ___multiply_____(num, num);
// }

// let finalResult = ___square_____(5);
// console.log(finalResult);


// function multiply(x, y) {
//   return x * y;
// }

// function square(num) {
//   return ___square_____(num);
// }

// let finalResult = ___square_____(5);
// console.log(finalResult);













// function getGrade(score) {
//   if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else {
//     return __"D"/"fail"______;
//   }
// }

// let grade = getGrade(75);
// console.__log______(grade);




// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * ___factorial_____(n - 1);
//   }
// }

// let result = factorial(5);
// console.___log_____(result);



// let text = "JavaScript";
// let start = 4;
// let end = 10; // Not including 10

// let result = "";

// for (let i = start; i < end; i++) {
//   result += text[i];
// }

// console.log(result); // Output: "Script"

// make a function and return  the substring, take start and end from user


// function sstring(start,end,str){
    
//     let result = ""
    
//     for(let idx = start; idx < end; idx++){
//         result += str[idx]
//     }
    
//     return result
// }


// let result = subString(2,5,"JavaScript")

// console.log(result)

// generate all possible sub strings

const allSubString = (string) => {
    let result=""
    for(let i = 0; i < string.length; i++){
        result=""
        for(let j = i; j < string.length; j++){
            // let result = subString(string, i, j)
            result+=string[j]
            console.log(result)
        }
    }
}
allSubString("abc")



const allSubString = (string) => {
    let maxLength = 0
    let vowels = "aeiou"
    for(let i = 0; i < string.length; i++){
        let result = ""
        for(let j = i; j < string.length; j++){
            if (vowels.includes(string[j])) break
            result += string[j]
        }
        if (result.length > maxLength) maxLength = result.length
    }
    return maxLength
}
let length = allSubString("abcdef")
console.log(length)




function nonVowelSubString(N, str){
    // write code here
    let max = 0;
    for(let i = 0; i<N; i++){
        let sub = "";
        for(let j = i; j<N; j++){
            sub += str[j];
            if(check(sub) && sub.length > max){
                max = sub.length;
            }
        }
    }
    console.log(max)
}
function check(sub){
    for(let el of sub){
        if(el == "a" || el == "e" || el == "i" || el == "o" || el == "u"){
            return false;
        }
    }
    return true
}









const isPrime = num => {
    if (num < 2) return true
    for(let i = 2; i < num; i++){
        if (num % i == 0) return false
    }
    return true
}   
const allSubString = (string) => {
    let counter = 0
    for(let i = 0; i < string.length; i++){
        let result = ""
        for(let j = i; j < string.length; j++){
            result += string[j]
            if (isPrime(result.length)) counter++
        }
    }
    return counter
}
let length = allSubString("abc")
console.log(length)

function isPrime(n){
    
    if(n < 2){
        return false
    }
    
    for(let idx = 2; idx < n; idx++){
        if(n % idx === 0){
            return false
        }
    }
    
    return true
}

function primeStr(str){
    
    let n = str.length, count = 0
    
    for(let i = 0; i < n; i++){
        let subStr = ""
        for(let j = i; j < n; j++){
            subStr += str[j]
            
            
            if(isPrime(subStr.length)){
                count++
            }
            
        }
        
        
    }
     
     
    return count
}






function subArr(arr){
    let n = arr.length, count = 0
    for(let i = 0; i < n; i++){
        let sm = 0
        for(let j = i; j < n; j++){
            sm += arr[j]
            if(sm % 2 != 0){
                count++
            }
        }
    }
    return count
}


let result = subArr([1,2,3,4,5])
console.log(result)
let result = primeStr("abc")
console.log(result)




const allSubString = (string, k) => {
    let counter = 0
    for(let i = 0; i < string.length; i++){
        if (string[i] != k) continue
        for(let j = i; j < string.length; j++){
            counter++
        }
    }
    return counter
}
let string = "aman"
console.log(allSubString(string, "a"))











