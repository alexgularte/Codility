console.log(solutionMaxCounters(5, [3,4,4,6,1,4,4]));

function solutionMaxCounters(N, A) {
    let counters = new Array(N).fill(0)
    let maxCounter = 0
    let lastMaxCounterApplied = 0

    for(const operation of A){
        if(operation > N){
            lastMaxCounterApplied = maxCounter            
        }
        else{
            if(counters[operation-1] < lastMaxCounterApplied){
                counters[operation-1] = lastMaxCounterApplied
            }

            counters[operation-1]++
            if(counters[operation-1] > maxCounter){
                maxCounter = counters[operation-1]
            }
        }
    }

    for(let i = 0;i<counters.length;i++){
        if(counters[i] < lastMaxCounterApplied){
            counters[i] = lastMaxCounterApplied
        }
    }

    return counters
}