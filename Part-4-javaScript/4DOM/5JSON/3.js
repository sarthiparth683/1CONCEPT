// Introduction to DOM Manipulation

// The example shows how to capture user input and display it by creating a new paragraph (<p>) element and appending it to the body of the document.
function addName() {
    var name = document.getElementById('nameInput').value;
    var p = document.createElement('p');
    p.innerText = name;
    document.body.appendChild(p);
  }
  