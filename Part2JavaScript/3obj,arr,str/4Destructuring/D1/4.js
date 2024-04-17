// Destructuring allows us to extract multiple properties from an object  

var person = {}
person.name = 'karthik';
person.id = 'sm_090';
person.location = 'India';
// creating property one by one

const name1 = person.name
const id1 = person.id
// extracting property one by one

// creating multiple properties together by using object literal notation
var person = {
    name:"karthik",
    id:"sm_090",
    location:"India"
}

var name = person.name
var id = person.id
var location = person.location


const { name, id, location } = person;
// The code can now be written in a better way now

