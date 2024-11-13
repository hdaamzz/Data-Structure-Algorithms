function moveZerosToEnd(nums) {
    let nonZeroIndex = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {

            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];

            nonZeroIndex++; 
    }
}
}

const arr=[6,8,4,8,5,3,0,3];
moveZerosToEnd(arr)
console.log(arr);
