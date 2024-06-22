

function IphoneGen1(ASIN, color, display, camera) {
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.dial = function () {
      console.log("tring.. tring...");
    };
    this.sendMessage = function () {
      console.log("Sending message...");
    };
    this.cameraClick = function () {
      console.log("Camera clicked");
    };
  };
  let iphone1 = new IphoneGen1("B09X67JBQV", "Gray", "90mm", "2.0 MP");
  iphone1.dial(); // "tring.. tring..."
  iphone1.sendMessage(); // "Sending message..."
  iphone1.cameraClick(); // "Camera clicked"