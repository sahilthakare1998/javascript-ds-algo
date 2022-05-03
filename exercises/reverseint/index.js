// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if(n==0) return 0
   let nChecking =n 
   if(Math.sign(n) == -1 ){
    nChecking = n*(-1)
    return Number(nChecking.toString().split('').reverse().join(''))*(-1)
   }
   else if(Math.sign(n) == 1 ){
    return Number(nChecking.toString().split('').reverse().join(''))
   }
}

module.exports = reverseInt;
