// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for(let i = 0; i< n ;i++){
        let row=''
       for(let j = 0; j< 2*n-1  ;j++){
          
           if(j>= (6-i) && j<= 4 + i){
               row += '#'
           }
           else{
               row += ' '
           }
          
       }
        console.log(row)
   }
}

module.exports = pyramid;
