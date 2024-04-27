// Map Characters & Sum
function mapCharAndSum(N,K,str) {
    let obj = {};
    let sum = 0;
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i <alphabets.length; i++) {
      let n = alphabets[i]
      obj[n] = i + N;
      //sum = sum + obj[n];  // it is adding all aplhabets
      // the question to find the sum of values of given string
  }
 // console.log(obj)
  //console.log(str)
  
  for(let j=0;j<str.length;j++){
      let char = str[j]
     // console.log(char, obj[char])
      sum = sum+obj[char]
  }
  console.log(sum);
  // for (let key in obj) {
  //     console.log(key + "-" + obj[key])
  // }
}

// {a:18, b:19, }