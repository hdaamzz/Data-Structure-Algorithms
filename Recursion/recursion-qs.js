//  Flatten a Nested Array
// Problem: Write a function to flatten a deeply nested array (like the example you just solved). Ensure that it handles arrays of any depth.

function flatten(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
// Sum of Digits
// Problem: Given a positive integer, find the sum of its digits using recursion.
// Example:
// Input: 1234
// Output: 10 (1 + 2 + 3 + 4)
function sumOf(num){
    if(num<10){
        return num
    }
    return (num%10)+sumOf(Math.floor(num/10));
}
//  Count Occurrences
// Problem: Write a function that counts how many times a specific value appears in a nested array.
// Example:
// Input: arr = [1, [2, [3, 4], 3], 3, [5]], value = 3
// Output: 3
function countDigit(arr,value){
    let count=0;
    for(let item of arr){
        if(Array.isArray(item)){
            count+=countDigit(item,value)
        }else{
            if(item===value){
                count++
            }
        }
    }
    return count
}
// String Reversal
// Problem: Reverse a string using recursion.
// Example:
// Input: "hello"
// Output: "olleh"
function reverseStr(str,index=str.length-1){
    if(index<0){
        return ""
    }
    return str[index]+reverseStr(str,index-1)
}

function stringRev(str){
    if(str === ''){
        return " "
    }
    return stringRev(str.slice(1))+str[0]
}
//  Fibonacci Sequence
// Problem: Write a recursive function to find the nth Fibonacci number.
// Example:
// Input: n = 6
// Output: 8 (The sequence is 0, 1, 1, 2, 3, 5, 8...)
function fibnacci(n){
    if(n==0){
        return 0;
    }if(n==1){
        return 1;
    }
    return fibnacci(n-1)+fibnacci(n-2);
}
//  Check Palindrome
// Problem: Check if a string is a palindrome using recursion.
// Example:
// Input: "radar"
// Output: true
function palindrome(str,start=0,end=str.length-1){
    if(start>=end){
        return true
    }
    if(str[start]!==str[end]){
        return false
    }
    return palindrome(str,start+1,end-1)
}

function checkPalindrome(str){
    if(str.length <=1){
        return true
    }
    if(str[0] !== str[str.length-1]){
        return false
    }
    return checkPalindrome(str.slice(1,-1))
}


// Binary Search
// Problem: Implement a recursive binary search algorithm.
// Example:
// Input: arr = [1, 3, 5, 7, 9], target = 5
// Output: 2 (Index of the target)
function binarySearch(arr,target,left=0,right=arr.length-1){
    if(left>right){
        return -1
    }
    
    let mid=Math.floor((left+right)/2)
    if(target==arr[mid]){
        return mid
    }
    if(target<arr[mid]){
        return binarySearch(arr,target,left,mid-1);
    }else{
        return binarySearch(arr,target,mid+1,right)
    }
}


// Sum of Nested Numbers
// Problem: Write a recursive function to sum all numbers in a nested array.
// Example:
// Input: [1, [2, [3, 4]], 5]
// Output: 15

function sumOfNestedArray(arr){
    if(arr.length==0){
        return 0
    }
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
             sum+=sumOfNestedArray(arr[i])
        }else{
            sum+=arr[i]
        }
    }
    return sum
}

// Factorial
// Problem: Write a recursive function to calculate the factorial of a number.
// Example:
// Input: 5
// Output: 120 (5 × 4 × 3 × 2 × 1)
function factorial(n){
    if(n==0 || n==1){
        return 1
    }
    return n*factorial(n-1)
}
//  Find Maximum number in a Nested Array
// Problem: Find the maximum value in a deeply nested array using recursion.
// Example:
// Input: [1, [4, [6]], 2]
// Output: 6
function findMaximumNumberInNestedArray(arr){
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            max=Math.max(max,findMaximumNumberInNestedArray(arr[i]))
        }else{
            max=Math.max(max,arr[i])
        }
    }
    return max
}

//  Nested Object Search
// Problem: Search for a value in a deeply nested object and return its path.
// Example:
// Input: { a: { b: { c: 42 } } }, target = 42
// Output: ['a', 'b', 'c']

function findValuePath(obj,target,path=[]){
    for(let key in obj){
        if(typeof obj[key]==="object" && obj[key] !==null){
            const  result=findValuePath(obj[key],target,[...path,key]);
            if(result){
                return result;
            }
        }else if(obj[key]===target){
            return [...path,key];
        }
    }
    return null;    
}



// sum of multiples of 3 using recursion

function sumOfMultiplesOf3(limit,curr=0){
    if(curr > limit){
        return 0;
    }
    const sum=curr%3==0?curr:0;
    return sum+sumOfMultiplesOf3(limit,curr+1)
}






// Combination Sum
// Problem: Find all combinations of numbers that sum up to a target using recursion.
// Example:
// Input: nums = [2, 3, 6, 7], target = 7
// Output: [[7], [2, 2, 3]]


// Nested Key Extraction
// Problem: Extract all the keys from a deeply nested object using recursion.
// Example:
// Input: { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: ['a', 'b', 'c', 'd', 'e']

// Deep Clone
// Problem: Write a recursive function to deeply clone an object or array.
// Example:
// Input: { a: 1, b: { c: 2 } }
// Output: A new object with the same structure and values.

// Merge Sorted Arrays
// Problem: Merge two sorted arrays into a single sorted array using recursion.
// Example:
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

// Find Depth of Nested Structure
// Problem: Find the depth of the deepest nested array or object using recursion.
// Example:
// Input: [1, [2, [3, [4]]]]
// Output: 4

// Count Zeros in a Number
// Problem: Count the number of 0s in a given number using recursion.
// Example:
// Input: 102030
// Output: 3

// Power Calculation
// Problem: Write a recursive function to calculate a^b (a raised to the power of b).
// Example:
// Input: 2^3
// Output: 8

// String Length
// Problem: Find the length of a string using recursion (without using .length).
// Example:
// Input: "hello"
// Output: 5

// Array Sum
// Problem: Find the sum of all elements in an array using recursion.
// Example:
// Input: [1, 2, 3, 4]
// Output: 10

// Is Sorted
// Problem: Check if an array is sorted in ascending order using recursion.
// Example:
// Input: [1, 2, 3, 4]
// Output: true

// Count Uppercase Letters
// Problem: Count the number of uppercase letters in a string using recursion.
// Example:
// Input: "HeLLoWorLD"
// Output: 5

// Find Minimum in Array
// Problem: Find the smallest number in an array using recursion.
// Example:
// Input: [3, 1, 4, 1, 5]
// Output: 1

// Remove Duplicates
// Problem: Remove consecutive duplicate characters from a string using recursion.
// Example:
// Input: "aabbcc"
// Output: "abc"

// Decimal to Binary
// Problem: Convert a decimal number to binary using recursion.
// Example:
// Input: 10
// Output: 1010

// Array Product
// Problem: Find the product of all elements in an array using recursion.
// Example:
// Input: [1, 2, 3, 4]
// Output: 24

// Count Vowels
// Problem: Count the number of vowels in a string using recursion.
// Example:
// Input: "hello"
// Output: 2

// Check Prime
// Problem: Check if a number is prime using recursion.
// Example:
// Input: 13
// Output: true

function isPrimeRecursive(n,i=2){
    if(n<2){
        return false;
    }
    
    if(i==n){
        return true
    }
    if(n%i===0){
        return false
    }
    return isPrimeRecursive(n,++i)
}

// Reverse Array
// Problem: Reverse an array using recursion.
// Example:
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

// Count Substrings
// Problem: Count all substrings of a given string using recursion.
// Example:
// Input: "abc"
// Output: 6 (substrings: "a", "b", "c", "ab", "bc", "abc")

// Find GCD
// Problem: Find the greatest common divisor (GCD) of two numbers using recursion.
// Example:
// Input: 48, 18
// Output: 6

// Sum of Array Elements at Odd Indices
// Problem: Find the sum of array elements located at odd indices using recursion.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 6 (2 + 4)


// Flatten Nested Object
// Problem: Flatten a deeply nested object into a single-level object using recursion.
// Example:
// Input: { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: { a: 1, c: 2, e: 3 }