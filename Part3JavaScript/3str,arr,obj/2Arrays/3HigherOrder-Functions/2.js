
 // Fun with Arrays-II
    // Higher Order Functions (HOF) & Call Back Functions (CBF)
    // HOF=> The function that takes another function as parameter
    // CBF=> The function hich itself goes as another function as parameter
    // See the following example:-
    // function print(){
    //     console.log("hello world")
    // }
    // // sum is HOF
    // function sum(a,b,fn){
    //     let c = a+b;
    //     if(c%2==0){
    //         console.log("Sum is Even")
    //     }else{
    //         console.log("Sum is Odd")
    //     }
    //    fn()
    // }
    // console.log(sum(3,4,print))
    // HERE, fn sum is HOF, because it is taking print fn as parameter, here fn print is called CBF, because it itself as going as parameter
    //---------------------------------------------------------------------------------------------
    // The following are the Inbuilt HOFS that are only applicable for Arrays
    // map   => el, i => returns entire array
    // filter => el, i => returns cut length array, because it is filtering
    // forEach ==> el, i=> returns nothing
    // reduce  ==> a, el, i => a is accumulator (intial declaration)
    // sort (a,b) ==> a & b are adjacent elements.