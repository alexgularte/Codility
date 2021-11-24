console.log(solutionBrackets('{[()()]}'));

function solutionBrackets(S) {
    const stack = []

    for(const s of S){
        if(isOpeningCharacter(s)){
            stack.push(s)
        }
        else{
            const poppedCharacter = stack.pop()
            if(poppedCharacter !== getOppositeCharacter(s)){
                return 0
            }
        }
    }

    return (stack.length === 0) ? 1 : 0
}

function isOpeningCharacter(S){
    return ['(','[','{'].includes(S)
}


function getOppositeCharacter(S){
    switch (S) {
        case ')':
            return '('
        case '}':
            return '{'
        case ']':
            return '['
      }
}
