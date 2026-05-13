// three ways to export module

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function test() {
  return "Testing function exported or not";
}

// export default add
export { add, sub, mul, div, test };
