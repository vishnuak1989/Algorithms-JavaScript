const reverseString = require('./reverseString.js'); //exporting the reverseString from reverseString.js

const reverseInteger=(int)=>{
const str = int.toString();
const revStr = reverseString.reverseString(str);
return parseInt(revStr)*Math.sign(int)
}


