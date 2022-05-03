// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let stringAKeyValue = []
    let stringBKeyValue = []
    stringA = stringA.replace(/[^\w]/g,'');
    stringB = stringB.replace(/[^\w]/g,'');
    console.log(stringA,stringB)
    if (stringA.length != stringB.length) return false  

    stringA.split('').map((value,index) => {
        if(!stringAKeyValue[value]){
            stringAKeyValue[value] = 1
        }
        else{
            stringAKeyValue[value]++
        }
    })

    stringB.split('').map((value,index) => {
        if(!stringBKeyValue[value]){
            stringBKeyValue[value] = 1
        }
        else{
            stringBKeyValue[value]++
        }
    })
    for(let i in stringAKeyValue){
        if(stringAKeyValue[i] != stringBKeyValue[i]){
            return false
        }
        
    }
    return true
}

module.exports = anagrams;
