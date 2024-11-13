let arr = [1, 2, 3];

//push
function customPush(arr, element) {
    arr[arr.length] = element;
    return arr.length;
}

// Example usage:
// let arr = [1, 2, 3];
customPush(arr, 4);
console.log(arr); // Output: [1, 2, 3, 4]
//pop
function customPop(arr) {
    if (arr.length === 0) return undefined;
    let lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
}

// Example usage:

let poppedElement = customPop(arr);
console.log(poppedElement); // Output: 3
console.log(arr); // Output: [1, 2]


//shift
function customShift(arr) {
    if (arr.length === 0) return undefined;
    let firstElement = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return firstElement;
}

// Example usage:

let shiftedElement = customShift(arr);
console.log(shiftedElement); // Output: 1
console.log(arr); // Output: [2, 3]

//unshift
function customUnshift(arr, element) {
    let newArr = new Array(arr.length + 1);
    newArr[0] = element;
    for (let i = 0; i < arr.length; i++) {
        newArr[i + 1] = arr[i];
    }
    for (let i = 0; i < newArr.length; i++) {
        arr[i] = newArr[i];
    }
    return arr.length;
}

// Example usage:

customUnshift(arr, 1);
console.log(arr); // Output: [1, 2, 3]
