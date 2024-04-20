// 11595-02  Sum of Rows
// Rows is the outer loop
// column is the inner loop
function sumOfRows(N, M, arr) {

    for (let i = 0; i < N; i++) {     
        let sum = 0;
        for (let j = 0; j < M; j++) {   
            sum = sum + arr[i][j] ;   // for row sum it first add's all the[i]index in row that is one row at a time then it moves to another row. 

            // sum = sum + arr[j][i];   //for column sum it first add's all the[j] index that is one column at a time then it moves to another column.

            // FIRST INDEX [] VALUE IS COMPLETED FIRST 
        }
       console.log(sum); 
    }
  
 

}

// sumOfRows(3, 2,
//     // sumOfcolumns(2, 3,  // for columns
//     [[1, 2],
//     [3, 4],
//     [5, 6]]);




    // how it is adding in backend
    // arr[i][j]  - This is for Rows sum  

    // arr[0][0] = 1
    // arr[0][1] = 2

    // arr[1][0] = 3
    // arr[1][1] = 4

    // arr[2][0] = 5
    // arr[2][1] = 6


    // SO IT IS LIKE THIS:-

// 0 0                          0 0   
// 0 1                          1 1
// 0 2    NOT LIKE THIS :-      2 2
// 0 3                          3 3
// 0 4                          4 4  

// first row or column depending upon index then monve to next row or column  


