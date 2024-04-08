// Logical Evens  
function logicalEvens(one, two) {
    if (one && two % 2 === 0) {
        console.log("Both");
    } else {
        console.log("No");
    }

    // or  


    //     let x = (one % 2 == 0);
    //     let y = (two % 2 == 0);
    //    if( x && y){
    //         console.log("Both")
    //     }else{
    //         console.log("No")
    //     }
}

logicalEvens(4, 8);