// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<(arr.length - i -1);j++){
            if(arr[j] > arr[j+1]){
                let lesss = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = lesss

            }
        }
    }

    return arr
}

function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] > arr[j]){
                let less = arr[i]
                arr[i]= arr[j]
                arr[j] =less
            }
        }
    }
    
    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };



// solution 

// function bubbleSort(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<(arr.length - i -1);j++){
//             if(arr[j] > arr[j+1]){
//                 let lesss = arr[j+1];
//                 arr[j+1] = arr[j];
//                 arr[j] = lesss
//             }
//         }
//     }

//     return arr
// }