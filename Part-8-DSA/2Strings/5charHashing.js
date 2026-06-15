// mappin value in Object
const str = "aabbc";

function cntChr(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  console.log(obj.c);
  return obj;
}

console.log(cntChr(str));
// ==========================================================
// mapping value in Map()
const s = "aabbc";
const freq = new Map();

for (const ch of s) {
  if (freq.has(ch)) {
    freq.set(ch, freq.get(ch) + 1);
  } else {
    freq.set(ch, 1);
  }
}
console.log(freq);
console.log(freq.get("a"));
console.log(freq.get("b"));
console.log(freq.get("c"));
console.log(freq.get("z"));
// ===========================================================
