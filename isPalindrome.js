const reverseString = require('./reverseString.js'); //exporting the reverseString from reverseString.js

const isPalindrome=(str)=>{
    const revStr = reverseString.reverseString(str.toLowerCase())
    return revStr === str.toLowerCase() ? "True" : "False"
}



