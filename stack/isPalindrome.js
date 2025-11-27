function isPalindrome(str) {
    let stack = []
    const cleanedString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for (let char of cleanedString) {
        stack.push(char)
    }
    let rev = '';
    while (stack.length>0) {
        rev+=stack.pop()
    }
    return cleanedString===rev
}