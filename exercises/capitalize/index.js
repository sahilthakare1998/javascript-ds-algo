// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //if (str.length == 1) return str.toUpperCase()

    str = str.split('')
    //for(let i in str)
    str.map((value,index) =>{
        if (index== 0) str[index] = str[index].toUpperCase()
        if(value == ' ' && str[index+1]){
            str[index+1] = str[index+1].toUpperCase()  
    
        }
    })
    return str.join('')
}

module.exports = capitalize;
