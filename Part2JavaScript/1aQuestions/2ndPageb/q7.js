// 11578-03   Another Nested Loop 

function anotherNested(num) {
    // let a = "";
    for (let i = 1; i <= num; i++) {
        // a = a + i + " ";
        // let a = "";
        for (let j = 1; j <= i; j++) {  // j is ending where is important
            // a = a + "*" + " ";
            console.log(j);
            // console.log(a);
        }
        // console.log(a);
        // console.log(i);
    }



}
anotherNested(4);