let b;
console.log( b ) // undefined
let a = (b=1 + 2, 3 + 4);

console.log( a ); // 7 (the result of 3 + 4)
console.log( b )

let c;
a = 1, b = 3, c = a * b;
console.log( c ) // 3