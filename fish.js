console.log(solutionFish([0,1],[1,1]));

function solutionFish(A, B) {
    let deaths = 0

    let currentDownStreamEating = []

    for(let i = 0;i<A.length;i++){
        if(B[i]){
            currentDownStreamEating.push(A[i])
        }
        else{
            if(currentDownStreamEating.length > 0){                
                if(A[i] > currentDownStreamEating[currentDownStreamEating.length-1]){                    
                    while(currentDownStreamEating.length && (A[i] > currentDownStreamEating[currentDownStreamEating.length-1])){
                        currentDownStreamEating.pop()
                        deaths++
                    }                    
                }
                else{
                    deaths++
                }
            }
        }
    }

    return A.length - deaths
}
