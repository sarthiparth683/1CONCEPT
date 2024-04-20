// 11578-01   Your first nested loop  
function yourFirstNested(num) {
    // let a = "";
    for (let i = 1; i <= num; i++) {  // OuterLoop
        // a = a + i + " ";
        // console.log(i);
        let count = 0;
        let BagStr = " ";
        for (let j = 1; j <= num; j++) { // InnerLoop
            count = count + 1;
            BagStr = BagStr + count + " ";
        }
        console.log(BagStr);
    }
}
// yourFirstNested(5); 