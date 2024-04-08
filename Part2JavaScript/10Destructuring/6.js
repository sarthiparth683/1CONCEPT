
// array destructuring

// standard way
const arr = ['MASAI','INDIA','EDTECH']
var name = arr[0]
var location = arr[1]
var desc = arr[2]

// es6
var [name,location,desc] = arr
console.log(name,location,desc)

// using destructuring in split
name = 'albert sebastian'
const [fname, lname] = name.split(' ')
console.log(fname, lname)

