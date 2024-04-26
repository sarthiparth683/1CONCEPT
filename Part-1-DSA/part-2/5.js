 // Reverse Array Traversal
 function reverseArrayTraversal(n, arr){
    let bag = "";
   for(let i =n-1; i>=0; i--){
       bag = bag + arr[i] + " ";
      
   }
    console.log(bag);
}