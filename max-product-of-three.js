console.log(solutionMaxProductOfThree([-5,-6,-4,-7,-10]))

function solutionMaxProductOfThree(A) {
    A = A.sort((a,b) => a - b)

    const first1 = A[0]
    const first2 = A[1]
    const first3 = A[3]

    const last1 = A[A.length-1]
    const last2 = A[A.length-2]
    const last3 = A[A.length-3]


    return Math.max(last1*last2*last3,first1*first2*last1)
}