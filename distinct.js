console.log(solutionDistinct([2,1,1,2,3,1]));

function solutionDistinct(A) {
    A = A.sort()
    
    if(A.length === 0){
        return 0
    }
  
    let distinctValuesCounter = 1
  
    for(let i = 1; i<A.length;i++){
      if(A[i] !== A[i-1]){
          distinctValuesCounter++
      }
    }
  
    return distinctValuesCounter
  }