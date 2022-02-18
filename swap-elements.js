console.log(solution([1,4,6,7,8,3,5,2],[4,6,8,4,1,9,4,6]));

function solution(arr1, arr2){
    const sum1 = arr1.reduce((acc, val) => acc+val,0)
    const sum2 = arr2.reduce((acc, val) => acc+val,0)

    console.log('sum1',sum1);
    console.log('sum2',sum2);

    console.log('diff', Math.abs(sum1 - sum2));

    if(Math.abs(sum1 - sum2)%2 !== 0){
        return false
    }

    const obj1 = arr1.reduce(reducer,{})
    const obj2 = arr2.reduce(reducer,{})

    let smallObj, bigObj, sumSmallObj, sumBigObj

    if(Object.keys(obj1).length < Object.keys(obj2).length){
        smallObj = obj1
        sumSmallObj = sum1

        bigObj = obj2
        sumBigObj = sum2
    }  
    else{
        smallObj = obj2
        sumSmallObj = sum2

        bigObj = obj1
        sumBigObj = sum1
    }

    for(const k in smallObj){
        const diff = Math.abs(sumBigObj-sumSmallObj)/2

        if(sumSmallObj > sumBigObj){
            if(bigObj[k-diff]){
                console.log(`${k} <-> ${k-diff}`);
                return true
            }
        }
        else{
            if(bigObj[k+diff]){
                console.log(`${k} <-> ${k+diff}`);
                return true
            }
        }
    }

    return false
}

function reducer(acc, val){
    acc[val] = true
    return acc
}