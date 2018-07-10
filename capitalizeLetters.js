//Using array.prototype.map and string.prototype.substr

const captitalizeLetters=(sentence)=>{
const array = sentence.trim().split(" ");
const upperCaseArray = array.map((word)=>word.substr(0,1).toUpperCase()+word.substr(1));
return upperCaseArray.join(" ");
}



//// Using replace and regex

const capitalizeLetters2=(sentence)=>{
    return sentence.replace(/\b[a-z]/gi,(char)=>{
        return char.toUpperCase();
    }).trim()
}

console.log(capitalizeLetters2(" i love javascript."))