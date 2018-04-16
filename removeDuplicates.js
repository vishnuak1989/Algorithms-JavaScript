
const removedDuplicates=((arr)=>{
  const result = [];
  return (arr.reduce((all,item,index,arr) => {
  if(arr.indexOf(item)===index)
  {
    result.push(item)
    return result
  }
  return all
},[]))})


//Example
const array1 = [1, 4, 9, 16, 4, 25 , 9, 16, 4, 18, 35, 23, 18];
console.log(removedDuplicates(array1)) 
//Ouput Array [1, 4, 9, 16, 25, 18, 35, 23]
