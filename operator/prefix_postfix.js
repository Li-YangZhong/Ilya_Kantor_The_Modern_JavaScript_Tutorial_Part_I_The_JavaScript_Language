let n = 5;
console.log(++n); // 6
console.log(n--); // 6
console.log(n); // 5

let counter = 1;
console.log( 2 * ++counter ); // 4

counter = 1;
console.log( 2 * counter++ ); // 2, because counter++ returns the "old" value
console.log(counter) // 2
