// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max= 0
    let maxIndex =''
    let charFreqency = {}
    for(let i of str ){
        if(!charFreqency[i]){
        
         charFreqency[i] = 1
        }
        else{
            charFreqency[i] = charFreqency[i] +1
        }
    }
    
    for(let i in charFreqency){
        if(max < charFreqency[i]){
            max = charFreqency[i]
            maxIndex = i
        }
    }
    console.log(charFreqency[maxIndex])
   return maxIndex
}

module.exports = maxChar;
