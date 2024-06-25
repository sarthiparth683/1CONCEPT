
// Task 1
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
};
let iphone1 = iPhoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
console.log(iphone1)
iphone1.dial(); // "tring.. tring..."
iphone1.sendMessage(); // "Sending message..."
iphone1.cameraClick(); // "Camera clicked"
//---------------------------------------------------------------
