// The splice() method changes the contents of an array by removing, replacing, and adding elements. It takes three parameters: the start index, the number of elements to remove, and optional elements to add. It's like modifying a specific portion of an array.
let arr1 = ['apple', 'banana', 'orange', 'grape', "Melon", "Berry", "litchi", "Guava", "Pomegranate"];
let arr2 = arr1.splice(1, 3, 'kiwi', 'mango', "added1", "added2", "added3");
console.log(arr2);
console.log(arr1);



