// Student Activities
// Task 1
// convert below code and and add all methods to prototype object.
// write a factory function iPhone1 to create iPhone objects in bulk quantity
// iPhone1 takes in ASIN, color, display, camera
// the object it creates has the following
// properties: ASIN, color, display, camera
// methods:
// dial - console logs "tring.. tring..."
// sendMessage - console logs "Sending message..."
// cameraClick - "Camera clicked"

function iPhoneGen1(ASIN, color, display, camera) {
    let obj = {};
  
    obj.ASIN = ASIN;
    obj.color = color;
    obj.display = display;
    obj.camera = camera;
  
    obj.dial = function () {
      console.log("tring.. tring...");
    };
  
    obj.sendMessage = function () {
      console.log("Sending message...");
    };
  
    obj.cameraClick = function () {
      console.log("Camera clicked");
    };
  
    return obj;
  }
  
  let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
  iphone1.dial(); // "tring.. tring..."
  iphone1.sendMessage(); // "Sending message..."
  iphone1.cameraClick(); // "Camera clicked"
//------------------------------------------------------------------------
function iPhoneGen1(ASIN, color, display, camera) {
    let obj = {};
    Object.setPrototypeOf(obj, iPhoneGen1.prototype); // set the prototype of the object that we are returning here to iPhoneGen1 prototype;
  
    obj.ASIN = ASIN;
    obj.color = color;
    obj.display = display;
    obj.camera = camera;
  
    return obj;
  }
  
  iPhoneGen1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  iPhoneGen1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  iPhoneGen1.prototype.cameraClick = function () {
    console.log("Camera clicked");
  };
  
  let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
  
  console.log(iphone1);
  
  iphone1.dial(); // "tring.. tring..."
  iphone1.sendMessage(); // "Sending message..."
  iphone1.cameraClick(); // "Camera clicked"
  //-------------------------------------------------------------------------------
//   Conclusion
// Factory functions offer a flexible approach to object creation in JavaScript, allowing developers to produce objects with shared properties and methods efficiently. By leveraging factory functions, developers can create modular and reusable code, promoting code organization and enhancing maintainability. Understanding the linkage between factory functions and objects, particularly in terms of prototypal inheritance, empowers developers to build scalable applications with ease. Mastery of factory functions facilitates efficient development practices, enabling the creation of adaptable and scalable software solutions in JavaScript.