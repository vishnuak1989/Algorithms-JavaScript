const maxCharacter = (str) =>{
const charMap = {}
let maxNo = 0;
let maxChar = "";
const array = str.split("");
array.forEach((char)=>{
if(charMap[char])
{
    charMap[char]++
}
else{
charMap[char] = 1
}
})

for (let char in charMap){
    if(charMap[char] > maxNo){
        maxNo = charMap[char]
        maxChar = char
    }
}
return maxChar
}

console.log(maxCharacter("javascript"))