function solution(N) {
    let str = 'x';
    if (N%2 === 0 ){
        str = str.repeat(N-1) + 'y';
    } else {
        str = str.repeat(N);
    }

    return str;
}
console.log(solution(1));
console.log(solution(4));
console.log(solution(7));
console.log(solution(18));
