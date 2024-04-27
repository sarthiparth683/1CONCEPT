// Pattern Printing V
function   print(n) {
    for (let i = n; i >= 1; i--) {
            let bag = "";
            for (let j = 1; j <= n; j++) {
                if (j < i) {
                    bag = bag + "*" + " ";
                }
                else if (j == i) {
                    bag = bag + "*";
                }
                else {
                    bag = bag + " " + " ";
                }
    
            }
            console.log(bag); 
        }
    }