//Example : Deleting last item from Javascript Map.
const testMap = new Map();
testMap.set('a',1);
testMap.set('b',2);
testMap.set('c',3);
testMap.set('d',4);
const lastKey = Array.from(testMap.keys()).pop();
testMap.delete(lastKey);
console.log([...testMap]);
