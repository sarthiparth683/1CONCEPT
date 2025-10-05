// ---------------------------------------------------------
// What is DOM - When a web page is loaded, the browser creates a Document Object Model (DOM) of the page 
// ---------------------------------------------------------
// DOM Manipulation 

// Selecting with id
// document.getElementById(“myId”)

// Selecting with class
// document.getElementsByClassName(“myClass”)

// Selecting with tag 
// document.getElementsByTagName(“p”)

// Query Selector
// document.querySelector(“#myId / .myClass / tag”)
//select first element of id,class,or tag

// document.querySelectorAll(“#myId / .myClass / tag”)
//select a NodeList or all 

// ---------------------------------------------------------
// Properties

// tagName : returns tag for element nodes
// textContent : returns textual content, same as innerText but it aslo returns (hidden elements).
// innerText : returns the text content of the element and all its children
// innerHTML : returns the plain text or HTML tag + contents in the element

// how to use it  - Node.tagName. Node.innerText etc... use to get and also assign values
// ---------------------------------------------------------
// Attributes 

// getAttribute( attr ) // to get the attribute value
// setAttribute( attr, value ) //to set the attribute value
// eg. node.getAttribute(attribute Name)
// ---------------------------------------------------------

// Style
// node.style

// eg - node.style.backgroundColor = red;
// node.style.fondSize = 24px
// ---------------------------------------------------------
// ---------------------------------------------------------
// Insert Elements

// node.append( el ) //adds el at the end of node (inside)
// node.prepend( el ) //adds el at the start of node (inside)
// node.before( el ) //adds el before the node (outside)
// node.after( el ) //adds el after the node (outside)
// ---------------------------------------------------------
// Delete Element
// node.remove( ) //removes the node
// ---------------------------------------------------------