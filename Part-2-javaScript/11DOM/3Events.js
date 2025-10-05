// ---------------------------------------------------------
// Events in JS - The change in the state of an object is known as an Event, Events are fired to notify code of "interesting changes" that may affect code execution.

// Mouse events (click, double click etc.)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc.)
// Print event & many more

// eg - <Button onMouseOver="runFunction"> </Button> , inline event Handlilng
// ---------------------------------------------------------
// -----------------------------------------------------------
// Event Handling in JS , not through inline event handling

// node.event = ( ) => {
//handle here
// }
//---------------
// example
// node.onclick = ( ) => {
// console.log(“btn was clicked”);
// }

// ---------------------------------------------------------
// ---------------------------------------------------------
// Event Object - It is a special object that has details about the event.All event handlers have access to the Event Object's properties and methods.

// node.event = (e) => {
// e.target, e.type, e.clientX, e.clientY
// }
// -----------
// Example
// node.onClick = (e) => {
// console.log(e)
// console.log(e.target)
// console.log(e.type)
// }

// ---------------------------------------------------------
// ---------------------------------------------------------
// Event Listeners

// node.addEventListener( event, callback )
// node.removeEventListener( event, callback )

// Note : the callback reference should be same to remove
// Example

// node.addEventListener("Click", (evt) => {
//   console.log("clicked");
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
// });
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
