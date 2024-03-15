// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that an equality check == and comparisions > < >= <= work differently
// Comparisions convert null to a Number, treating it as 0. That's why (3) null>=0 is true and (1)null >0 is false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); // All outputs are false.
//  Avoid to do this type of conversions



// strict check (===)
// check value as well as datatype.
console.log("2" === 2);