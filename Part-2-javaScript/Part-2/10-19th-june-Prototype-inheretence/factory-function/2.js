function iPhoneGen2(ASIN, color, display, camera) {
  let obj = {};
  Object.setPrototypeOf(obj, iPhoneGen2.prototype); // set the prototype of the object that we are returning here to iPhoneGen2 prototype;
  obj.ASIN = ASIN;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;
  return obj;
};
iPhoneGen2.prototype.dial = function () {
  console.log("tring.. tring...");
};
iPhoneGen2.prototype.sendMessage = function () {
  console.log("Sending message...");
};
iPhoneGen2.prototype.cameraClick = function () {
  console.log("Camera clicked");
};
let iphone2 = iPhoneGen2("B09X67JBQV", "Gray", "90mm", "2.0 MP");
console.log(iphone2);
iphone2.dial(); // "tring.. tring..."
iphone2.sendMessage(); // "Sending message..."
iphone2.cameraClick(); // "Camera clicked"