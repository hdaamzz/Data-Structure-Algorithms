//Write a function that takes a string as input and returns the string reversed.
function reverseString(str){
    let reverse=""
    for(let i = str.length-1 ; i>=0;i--){
        reverse+=str[i]
    }
    
    return reverse
}
// console.log(reverseString("rp htnawsA"))

// Write a function that checks if a given string is a palindrome

// function isPalindrome(string){
//     let str =string.toLowerCase()
// let j=str.length-1
//     for(let i =0; Math.floor(i<str.length/2);i++){
      
//         if(str[i]!==str[j]){
           
//             return false
            
//         }
//         j--
//     }
//     return true
// }
// console.log(isPalindrome("Racecar"),'racecar is palliandrome')
// console.log(isPalindrome("english"),'english is not palliandrome')

// Write a function that counts the number of vowels (a, e, i, o, u) in a given string.
function countVowels(str){
    let count  = 0
    let vowels = "aeiouAEIOU"
    for(let i =0 ; i< str.length;i++){
      
        if(vowels.includes(str[i])){
            count++
        }
        
    }
    return count
}
console.log('vowel count is :',countVowels("hello"))
console.log('vowel count is :',countVowels("linkedlist"))