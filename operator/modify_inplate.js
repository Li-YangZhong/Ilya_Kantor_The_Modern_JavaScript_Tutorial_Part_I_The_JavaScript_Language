let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log( n ); // 14

n = 2;

n *= 3 + 5;

console.log( n ); // 16  (right part evaluated first, same as n *= 8)