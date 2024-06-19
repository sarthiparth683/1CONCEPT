
let parentObj = 
{ 
prop1: "value1" 
};

let childObj = 
{ 
prop2: "value2" 
};

Object.setPrototypeOf(childObj, parentObj);
console.log(childObj.prop1);