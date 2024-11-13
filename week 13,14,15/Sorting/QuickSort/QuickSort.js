//Quick sort Ascending order

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [6, 5, 7, 2, 4, 2, 9, 7, 55, 23, 89, 6]
console.log(quickSort(arr))

//quick sort descending order

// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }

// const ar = [6, 5, 7, 2, 4, 2, 9, 7, 55, 23, 89, 6]
// console.log(quickSort(ar))