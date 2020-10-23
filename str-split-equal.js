function solution(S) {
    let arrA = S.match(/[a]/g) || 0;
    if (arrA && arrA.length < 3 && arrA.length > 0){
        return 0;
    }

    if (arrA === 0){
        return Math.floor(S.length/3)+1;
    }

    if (S[0].toLowerCase === 'a'){
        return (Math.floor(S.length/3)*3)+1;
    }

    return (Math.floor(S.length/3)*2)+1;

    

    return arrA.length;

}

// function checkAs(str){
//     let arrA = S.match(/[a]/g) || 0;

//     if (arrA && arrA.length < 2){
//         return;
//     }


// }

// console.log(checkAs('babaa'));

console.log(solution('babaa'));
console.log(solution('ababa'));
console.log(solution('aba'));
console.log(solution('bbbbb'));