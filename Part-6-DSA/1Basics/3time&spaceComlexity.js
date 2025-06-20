//lecture1:-  https://coding-platform.s3.amazonaws.com/dev/lms/tickets/c8836366-e014-4130-ba3e-577547acc3c4/ZZDuzhrt1klyqBRU.pdf

//lecture2:- https://coding-platform.s3.amazonaws.com/dev/lms/tickets/1ea5b9cd-3fa5-4ebd-8a1c-472258a433a1/USeFPULYNDrbYBbp.pdf

// Time Complexity in (increasing order) or (best to worst)-
//  O(1) < O(log n) < O(root under n) < O(n) < O(n log n) < O(n square) < O(n cube) < O(2 power n)

// O(1) - Constant Time - eg.- console.log(), break, continue, return, All operators(+,-,*,/,%,&&,||...etc), if else , switch etc...are all lowest time complexity - best time complexity
// size of input n cannot be negative , although elements in code can be negative
// O(n)
// O(n)
// O(n)
// O(n)
//-------------------------------------------------------------------
// O(1) - Constant Time
// function printValue(int n)
// {
//     print(n);
// }

//-------------------------------------------------------------------
// O(logn) - Logarithmic Time
// function oneToN(int n)
// {
//     for(int i=1; i<=n; i=i*2)
//     {
//         print("*");
//     }
// }

// function NtoOne(int n)
// {
//     for(int i=n; i>=1; i=i/2)
//     {
//         print("*");
//     }
// }

//-------------------------------------------------------------------
// O(n) - Logarithmic Time
// function printArray(int arr[], int n)
// {
//     for(int i=0; i<n; i++)
//     {
//         print(arr[i]);
//     }
// }
// function printArray(int arr[], int n)
// {
//     for(int i=n-1; i>=0; i--)
//     {
//         print(arr[i]);
//     }
// }

//-------------------------------------------------------------------
// O(nlogn) - Linearithmic Time
// function linearithmicOne(int n)
// {
//     int i=1;
//     while(i<=n)
//     {
//         for(int j=1; j<=n; j=j*2)
//         {
//                 print("*");
//         }
//         i=i+1;
//     }
// }

// function linearithmicTwo(int n)
// {
//     int i=1;
//     while(i<=n)
//     {
//         for(int j=1; j<=n; j=j+1)
//         {
//                 print("*");
//         }
//         i=i*2;
//     }
// }

//-------------------------------------------------------------------
// O(n^2) - Quadratic Time
// function printPairs(int arr[], int n)
// {
//     for(int i=0; i<n; i++)
//     {
//         for(int j=0; j<n; j++)
//         {
//             print(arr[i], arr[j]);
//         }
//     }
// }
//-------------------------------------------------------------------
