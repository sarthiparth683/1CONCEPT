


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
  // Conclusion
  // Factory functions offer a flexible approach to object creation in JavaScript, allowing developers to produce objects with shared properties and methods efficiently. By leveraging factory functions, developers can create modular and reusable code, promoting code organization and enhancing maintainability. Understanding the linkage between factory functions and objects, particularly in terms of prototypal inheritance, empowers developers to build scalable applications with ease. Mastery of factory functions facilitates efficient development practices, enabling the creation of adaptable and scalable software solutions in JavaScript.