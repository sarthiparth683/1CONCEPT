const arr = [10, 20, 30, 40, 50, 60];
console.log(arr.slice(0))
console.log(arr.slice(0, 3))
console.log(arr.slice(-3))
console.log(arr.slice(-1))

// ================================================================
// windows + .(period) = emoji
// Traversing means - accessing each element in array
{
  const mixedArray = [100, true, "tapaScript", {}];
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  console.log(salad.slice(0, 4));

  function Car(model) {
    this.model = model;
  }
  const bmwCar = new Car("BMW X1");
  console.log(bmwCar);
  console.log(bmwCar.model);
  // ---------------------------------------------------------
  const anotherSalad = new Array("🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑");
  console.log(salad);
  console.log(anotherSalad);
  console.log(salad === anotherSalad);
  // ----------------------------------------------------------
  const two = new Array(1, 2);
  console.log(two);
  // --------------------------------------------------------
  console.log(salad[0]);
  console.log(salad[2]);
  console.log(salad[5]);

  for (let i = 0; i < salad.length; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
  }
  // -------------------------------------------------------------
  // push() - end
  const ret = salad.push("🥜");
  console.log(ret); // 8
  console.log(salad);

  // unshift() - start
  const unRet = salad.unshift("🥜");
  console.log(unRet); // 9
  console.log(salad);

  // pop - end
  console.log(salad);
  const popRet = salad.pop();
  console.log(popRet);
  console.log(salad);

  // shift() - start
  console.log(salad);
  const shiftRet = salad.shift();
  console.log(shiftRet);
  console.log(salad);

  // slice() - copy

  // salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
  const saladCopy = salad.slice();
  console.log("Salad Before Copy", salad);
  console.log("Salad After Copy", saladCopy);
  console.log(salad === saladCopy);
  // =====================================================================
  // Deletermine if Array
  console.log(Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]));
  console.log(Array.isArray("🍅"));
  console.log(Array.isArray({ tomato: "🍅" }));
  console.log(Array.isArray([]));

  const arr = [1, 2, 3, 4];
  console.log(Array.isArray(arr));
}
// ==========================================================================
// Array Destructuring
{
  const salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];
  console.log(tomato, mushroom, carrot);
}

{
  const [tomato, mushroom = "🍄"] = ["🍅"];
  console.log(tomato);
  console.log(mushroom);
}

{
  const [tomato, , carrot] = ["🍅", "🍄", "🥕"]; // empty space for middle element

  console.log(tomato);
  console.log(carrot);
}
// ====================================================================================
// Nested Array
{
  let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
  const veg = fruits[4];
  const carrot = veg[2];
  console.log(veg);
  console.log(carrot);
  console.log(fruits[4][2]);

  let [, , , , [, , carrot2]] = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]]; // emplty space for not selection elements
  console.log(carrot2);
}
//  =====================================================================================
// Rest and Spread
{
  const [tomato, mashroom, ...rest] = [
    "🍅",
    "🍄",
    "🥦",
    "🥒",
    "🌽",
    "🥕",
    "🥑",
  ];

  console.log(tomato);
  console.log(rest);

  const mySalad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];
  const mySaaladCopy = [...mySalad];
  console.log(mySaaladCopy);
  console.log(mySalad === mySaaladCopy);
}
// ==========================================================================================
// Swapping
{
  let first = "😔";
  let second = "🙂";

  [first, second] = [second, first];

  console.log(first);
  console.log(second);
}

// Merge
{
  const emotions = ["🙂", "😔"];
  const veggies = ["🥦", "🥒", "🌽", "🥕"];
  const emotionalVeggies = [...emotions, ...veggies];
  console.log(emotionalVeggies);
}

// length
{
  const arr1 = [11, 21, 73];
  const arr2 = new Array(7);
  console.log(arr1.length);
  console.log(arr2.length);
  // 2 ** 32 - 1 // 4294967295
  arr1.length = 9;
  console.log(arr1);
  arr1.length = 2 ** 32 - 1;
  console.log(arr1.length);
  //   arr1.length = 2 ** 32 // invalid array length
}
// =============================================================
// concat()
{
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const third = [7, 8, 9];
  const merged = first.concat(second, third);
  console.log(merged);
}

// join()
{
  const emotions = ["🙂", "😍", "🙄", "😟"];
  const joined = emotions.join("<=>");
  console.log(joined);
}

// fill()
{
  const colors = ["red", "blue", "green", "Yellow", "White", "Black"];
  colors.fill("pink", 1, 3);
  console.log(colors);
}

// includes()
{
  const names = ["tom", "alex", "bob", "john"];
  console.log(names.includes("tom"));
  console.log(names.includes("july"));
}

// indexOf() and lastIndexOf()
{
  const names = ["tom", "alex", "bob", "tom"];
  console.log(names.indexOf("alex"));
  console.log(names.indexOf("rob"));
  console.log(names.indexOf("tom"));
  console.log(names.lastIndexOf("tom")); // counts from last
}

// reverse()
{
  const names = ["tom", "alex", "bob"];
  console.log(names.reverse());
}
// ====================================================================
// sort() - The default sort() method converts the element types into strings.The default sorting order is ascending.

{
  const names = ["tom", "alex", "bob"];
  console.log(names.sort());

  const artists = ["John", "Leonardo", "Charles", "Anna", "Barent"];
  console.log(artists.sort());
  console.log(artists.sort((a, b) => b - a));

  artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  });
  console.log("(Descending)", artists);
  // ===========================================================
  let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
  console.log(ages.sort((a, b) => a - b));
  console.log(ages.sort((a, b) => b - a));
}
// ===========================================================
// splice() - splice(start, deleteCount, item, item1, item2)
{
  const names = ["tom", "alex", "bob"];
  names.splice(2, 1, "zack");
  console.log(names);
}

// at()
{
  const junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];
  console.log(junkFoodILove.at(0));
  console.log(junkFoodILove.at(3));
  console.log(junkFoodILove.at(-1));
  console.log(junkFoodILove.at(-5));
  console.log(junkFoodILove.at(-8));
  console.log(junkFoodILove.at(10));
}

// copyWithin()
{
  // copyWithin(target, start, end) - copy within the same array not in new array...

  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  console.log(array.copyWithin(0, 3, 6));
  console.log(array);

  const array1 = [0, 1, 2, 3, 4, 5, 6, 7];
  array1.copyWithin(0, 4);
  console.log(array1);
}

// flat()
{
  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  console.log(arr2.flat(1));
  console.log(arr2.flat(2));
  console.log(arr2.flat(Infinity));
}

// grouping
{
  const employees = [
    { name: "Bob", dept: "Engineering", salary: 5000 },
    { name: "Alex", dept: "HR", salary: 3000 },
    { name: "Ravi", dept: "Engineering", salary: 7000 },
    { name: "John", dept: "Engineering", salary: 1000 },
    { name: "Tom", dept: "Sales", salary: 6000 },
  ];

  const groupedByDet = Object.groupBy(employees, ({ dept }) => dept);
  console.log(groupedByDet);

  const groupedByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
    return salary >= 5000 ? "More than 5k" : "Less than 5k";
  });
  console.log(groupedByMoreThan5000);
}

// toReversed()
{
  const items = [1, 2, 3];
  console.log(items.toReversed());
  console.log(items.reverse());
}

// toSorted()
{
  const months = ["Mar", "Jan", "Feb", "Dec"];
  console.log(months.toSorted());
  console.log(months.sort());
}

// toSpliced()
{
  const months = ["Jan", "Mar", "Apr", "May"];
  const months2 = months.toSpliced(1, 0, "Feb");
  console.log("Original Array", months);
  console.log("Spliced Array", months2);
}

// with()
{
  const numbers = [1, 2, 3, 4, 5];
  const newArray = numbers.with(2, 6);
  console.log(numbers); // Unchanged
  console.log(newArray); // Changed(A new copy)

  const anotherArray = numbers.with(-2, 8);
  console.log(numbers);
  console.log(anotherArray);
}

// Array Like
{
  const arr_like = { 0: "I", 1: "am", 2: "array-like", length: 3 };
  console.log(arr_like);
  console.log(Array.isArray(arr_like));
  console.log(arr_like instanceof Object);

  function checkArgs() {
    console.log(arguments); // arguments is by defautl created while function is creation.
    const argArr = [...arguments];
    console.log(argArr);

    argArr.forEach((elem) => {
      console.log(elem);
    });
  }

  checkArgs(1, 45);
  // =================================================================
  // const collectionArr = Array.from(document.getElementsByTagName("li"));
  // console.log("Converted Array", collectionArr);
}

// fromAsync()
{
  // const collectionPromise = Array.fromAsync(
  //   document.getElementsByTagName("li"),
  // );
  // console.log("Converted Array", collectionPromise);
  // collectionPromise.then((value) => console.log(value));
  // const ret = Array.fromAsync({
  //   0: Promise.resolve("tapaScript"),
  //   1: Promise.resolve("Google"),
  //   2: Promise.resolve("Apple"),
  //   length: 3,
  // }).then((value) => console.log(value));
  // console.log(ret);
}

// of()
{
  const a = new Array(2, 3, 4);
  console.log(a);

  const b = [4, 5, 6];
  console.log(b);

  const c = Array.of(2, true, "test", { name: "Alex" }, [1, 2, 3]);
  console.log(c);

  const d = [2, true, "test", { name: "Alex" }, [1, 2, 3]];
  console.log(d);
}

let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60;
});
console.log(seniorCustomers);
// =================================================================
// map() - returns array
const customersWithFullName = customers.map((customer) => {
  let title = "";
  if (customer.gender === "M") {
    title = "Mr.";
  } else if (customer.gender === "F" && customer.married) {
    title = "Mrs.";
  } else {
    title = "Miss";
  }
  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;
  return customer;
});

console.log(customersWithFullName);
// ======================================================================
// reduce() - reduces to one single value

{
  const arr = [1, 2, 3, 4, 5];
  const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(result);
}
// -------------------------------------------------------
let count = 0;
const total = customers.reduce((accumulator, customer) => {
  if (customer.purchased.includes("Book")) {
    accumulator = accumulator + customer.age;
    count = count + 1;
  }
  return accumulator;
}, 0);

console.log(Math.floor(total / count));
// --------------------------------------------------------
// reduceRight() -- To reduce from the right hand side
let number = [100, 40, 15];
let red = number.reduce((acc, curr) => acc - curr);
const redRight = number.reduceRight((accumulator, current) => {
  return accumulator - current;
});

console.log(red);
console.log(redRight); // difference b/w red and red right
// ==========================================================
// some() - any one el should be true
const hasYoungCustomer = customers.some((customer) => {
  return customer.age < 10;
});
console.log(hasYoungCustomer);
// --------------------------------------------------------
// every() - every el should be true
const isAllMarried = customers.every((customer) => {
  return customer.married;
});
console.log(isAllMarried);
// --------------------------------------------------------
// find() - find the first true element
const foundYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
});
console.log(foundYoungCustomer);
// =========================================================
// findIndex() - gives index
const youngCustomerIndex = customers.findIndex((customer) => {
  return customer.age < 10;
});
console.log(youngCustomerIndex);
// ----------------------------------------------------------
// findLast() - find the last element
const lastFoundYoungCustomer = customers.findLast((customer) => {
  return customer.age < 10;
});
console.log(lastFoundYoungCustomer);
// -----------------------------------------------------------
// Array method Chaining
const totalExpense = customers
  .filter((customer) => {
    return customer.married;
  })
  .map((marriedCustomer) => {
    return marriedCustomer.expense;
  })
  .reduce((accum, expense) => {
    return accum + expense;
  }, 0);

console.log("Total Expense of Married Customers in INR: ", totalExpense);
// --------------------------------------------------------------
// forEach()
let sum = 0;
arr.forEach((elem) => {
  sum = sum + elem;
  //console.log(elem)
});
console.log("Sum using forEach", sum);

// entries()
const arrItr = arr.entries();
/*console.log("Array Iterator", arrItr.next().value) // [0, 1]
console.log("Array Iterator", arrItr.next().value) // [1, 2]*/

for (const [index, element] of arrItr) {
  console.log(index, element);
}

// values()

const arrItr2 = arr.values();

for (const value of arrItr2) {
  console.log(value);
}

// flatMap()

const arr1 = [1, 2, 3, 4];

console.log(
  "simple map",
  arr1.map((item) => item * 2),
);
console.log(
  "simple flatmap",
  arr1.flatMap((item) => item * 2),
);

console.log(
  "complex map",
  arr1.map((item) => [item * 2]),
); //[[2], [4], [6],..]
console.log(
  "complex flat map",
  arr1.flatMap((item) => [item * 2]),
);

arr1.map((item) => [[item * 2]]);
arr1.flatMap((item) => [[item * 2]]);
// ==========================================================
let arr99 = [1, 2, 1];
console.log(arr99);
console.log(arr99.join(","));
console.log(arr99.join(",") === arr99.reverse().join(","));
// ==========================================================
