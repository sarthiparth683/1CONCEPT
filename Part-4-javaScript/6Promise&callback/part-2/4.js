let product = [{a:1},{b:2}]
    let cont = document.getElementById("cont");
    let img = document.createElement("img");
    img.src =
      "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952f0t5y7n4z7z9rvyuajz9uktutnxjtd3ssm4cqkyw&ep=v1_gifs_search&rid=200w.gif&ct=g";
    cont.append(img);

    let getData = true;
    let p = new Promise((resolve, reject) => {
      // what do you mean by resolve
      // if promise completes==> resolve
      // if promise fails==> reject
      if (getData) {
        setTimeout(() => {
          img.style.display = "none";
        }, 3000);
        resolve(product);
      } else {
        setTimeout(() => {
          img.style.display = "none";
        }, 3000);
        reject("Data failed");
      }
    });

    //console.log(p);
    // we need to consume the promise
    //.then , .catch  => 
    //.then=> promise is resolved
    //.catch => promise is rejected
    //.then=> what to do after...? if promise success
//     p.then((response) => {
//       let h3 = document.createElement("h3");
//       h3.textContent = "Data loaded....";
//       cont.append(h3);
//       console.log(response);
//     });
// //.cath ==> what to do after...? if promise fails
//     p.catch(() => {
//       let h3 = document.createElement("h3");
//       h3.textContent = "Data Failed to load....";
//       cont.append(h3);
//       console.log("Data Failed");
//     });

