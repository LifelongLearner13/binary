// 0100 -> 4
// 1000 -> 8
// x = 01100000
// 01100000 -> 96

// 1110 -> 14
// 0100 -> 4
// 01110100 -> 116

let fakeMortonNumber = (x, y) => {
  x_str = ("00000000" + (x >>> 0).toString(2)).slice(-8)
  y_str = ("00000000" + (y >>> 0).toString(2)).slice(-8)
  console.log("Mortoning ", x_str, y_str)
  s = ''
  for(var i = 0; i < 8; i++) {
    s += (x_str[i] + y_str[i])
  }
  console.log(s)
}

console.log(fakeMortonNumber(4,8))

// Source: https://stackoverflow.com/questions/3203764/bit-twiddling-hacks-interleave-bits-the-obvious-way
var realMortonNumber = function (x, y) {
  // console.log("Mortoning ", x.toString(2), y.toString(2))
  var z = 0;
  for (i = 0; i < 8; i++) {
    var a = x & (1 << i); // like accessing a value at the i index
    var b = y & (1 << i);
    z = z | (a << i); // like concatination
    z = z | (b << (i + 1));
    // console.log(`${i} times through the loop a is ${a} and b is ${b}`)
  }
  return (z >>> 0).toString(2)
}
console.log(realMortonNumber(8,4));
