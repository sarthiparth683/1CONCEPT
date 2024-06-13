let product = [{ a: 1 }, { b: 2 }];
let cont = document.getElementById("cont");
let img = document.createElement("img");
img.src = "https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg";
img.style.width = "100px";
cont.append(img);
//-----------------------------------------------------------------------------------------
let getData = true;
let p = new Promise((resolve, reject) => {
  resolve("successfull-1");
  reject("Data failed");
});
console.log(p);
p.then((response) => {
  let h3 = document.createElement("h3");
  h3.textContent = "Data loaded....";
  cont.append(h3);
  console.log(response);
});
p.catch(() => {
  let h3 = document.createElement("h3");
  h3.textContent = "Data Failed to load....";
  cont.append(h3);
  console.log("Data Failed");
});
//---------------------------------------------------------------------------------------------
