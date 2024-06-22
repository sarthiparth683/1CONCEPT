
//----------------------------------------------------------------------------
function IphoneGen1(ASIN, color, display, camera) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
  }
;
  IphoneGen1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  IphoneGen1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  IphoneGen1.prototype.cameraClick = function () {
    console.log("Camera clicked");
  };
  let iphone1 = new IphoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
  console.log(iphone1);
  iphone1.dial(); // "tring.. tring..."
  iphone1.sendMessage(); // "Sending message..."
  iphone1.cameraClick(); // "Camera clicked"
  //-------------------------------------------------------------------------------
//   Conclusion
// Constructor functions in JavaScript, coupled with prototypal inheritance, empower developers to create objects with shared properties and methods efficiently. This approach promotes code reuse and modularity, enhancing scalability and maintainability. By mastering constructor functions and understanding their linkage to objects, developers can build robust applications with reusable code, fostering efficient development practices and enabling the creation of scalable software solutions.