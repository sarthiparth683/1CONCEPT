// let str = "kjabuyagei"
// let count = 0
// for (let i = 0; i < str.length; i++)
// {
//   if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//     count += 1
//   }
// }
//   if (count === 0){
//     console.log("No vowels found")
//   }
//   else{
//   console.log(count)  
    

// }

// let str="hrsh";
// for(let i=0;i<str.length;i++){
//     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
//         console.log(true);
//         return 0 or break;
//     }
// }
// console.log(false);





// let str = "naman"
// let bag = ""
// for(let i=str.length-1; i>=0; i--){
//     bag+=str[i]
    
// }
// if(str===bag){
//     console.log("true");
    
// }else{
//     console.log("false");
    
// }


// let str = "navman"
// let flag = 'true'

// for (let i = 0; i < str.length; i++) {
//   if (str[i] != str[str.length - i - 1]) {
//       flag = 'false'
//       break;
//     }
//   else{
//     continue
//   }
// }
// console.log(flag)

// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// let str="madam";
// let i=0;
// let j=str.length-1;
// while(i<j){
//     if(str[i]!=str[j]){
//         console.log("Not a palindrome");
//     }
//     i++;
//     j--;
// }
// console.log("It is a palindrome");


// let arr = [3,4,2,6,5,3,1,0]
// let sumOfOdd =0
// let sumOfEven = 0

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2===0){
//         sumOfEven+=arr[i]
//     }
//     else{
//         sumOfOdd+=arr[i]
//     }
// }

// if(sumOfOdd < sumOfEven){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }



// const oddOverEven = arr => {
    
//     let oddSum = 0
//     let evenSum = 0
//     for (let i of arr){ 
//         if (i % 2 == 0){
//             evenSum += i
//         }
//         else{
//             oddSum += i
//         }
//     }
    
//     if (oddSum > evenSum) console.log("Odd")
//     else console.log("Even")
// }
// oddOverEven([1,2,3,4,5,6])

// let str="i am doing some thing";
// let arr=str.split(" ");
// let bag="";
// for(let i=arr.length-1;i>=0;i--){
//     bag+=arr[i]+" ";
// }
// console.log(bag);


// const reverseSentence = sentence => {
//     let words = sentence.trim().split(" ")
//     let left = 0
//     let right = words.length-1
//     while (left < right){
//         temp = words[right]
//         words[right] = words[left]
//         words[left] = temp
//         left++
//         right--
//     }
//     let result = ""
//     for (word of words){
//         result += word + " "
//     }
    
//     return result
// }
// console.log(reverseSentence("I am doing coding"))


// let str="i am doing some thing";
// let bag=""
// for(let i=str.length-1;i>=0;i--){
//     bag+=str[i];
// }
// console.log(bag);


let str = "mynameisjohn"
let i = 0
let j = 2
let str1 = ""
while (j < str.length){
    str1 += str[j] + str[i+1] + str[i]
    i += 3
    j += 3
}
console.log(str1)


const reverseWord = word => {
    let result = ""
    for (let i = word.length - 1; i >= 0; i--){
        result += word[i]
    }
    return result
}
const reverseByLength = (string) => {
    let result = ""
    for (let i = 0; i < string.length-2; i += 3){
        word = string.substring(i, i+3)
        result += reverseWord(word)
    }
    return result
}
console.log(reverseByLength("ritika"))


let str = 'abcdef', resStr = ""
for(let i=0; i<str.length; i+=3){
    for(let j=i+2; j>=i; j--){
        resStr+=str[j]
    }
}
console.log(resStr)



let str = "Searching";
let bag = "";

for (let i = 0; i + 2 < str.length; i += 3) {
    bag += str[i + 2] + str[i + 1] + str[i];
}

console.log(bag);
let str = "mynameisjohn"
let i = 0
let j = 2
let str1 = ""
while (j < str.length){
    str1 += str[j] + str[i+1] + str[i]
    i += 3
    j += 3
}
console.log(str1)




