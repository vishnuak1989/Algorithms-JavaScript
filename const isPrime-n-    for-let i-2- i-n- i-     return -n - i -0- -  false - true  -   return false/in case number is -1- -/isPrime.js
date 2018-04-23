const isPrime=(n)=>{ 
  for(let i=2; i<n; i++){
    return (n % i ===0) ?  false : true  }
  return false //in case number is '1'
}


//Test Case
console.log(isPrime(5))
