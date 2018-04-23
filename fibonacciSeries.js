//Fibonnaci Series of n length
  let fibSeries=[0 , 1]
const fibonacci=(n)=> {

  for(i = 2; i<n; i++)
    {
      let num = fibSeries[i-1]+ fibSeries[i-2]
      fibSeries.push(num)
    }
}

//Test Case
fibonacci(10)
console.log(fibSeries)
