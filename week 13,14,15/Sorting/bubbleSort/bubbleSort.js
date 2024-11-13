
// //bubble sorting 

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }
    } while (swapped == true)
}
const arr = [17, 14, 16, 12, 18, 9, 10, 13, 11, 15]
bubbleSort(arr)
console.log(arr)
//-----------------------------------------------------

const BubbleSort = ((arr) => {
    let swapped;
    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swapping using array destructuring
                swapped = true;
            }
        }
    } while (swapped);
    return arr
});

console.log(BubbleSort([ 9,6,3,0,9,9,4,1,32,65,23]));
