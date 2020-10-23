function solution(A, B) {
    let values = [];

    let obj = {};

    for (let item of A){
        let toFind = B - item;
        if(obj[toFind]){
            values.push(toFind, item);
            break;
        }
        obj[item] = true;
    }
    return values;
}


console.log(solution([3,2,4,6,8,1], 10));
console.log(solution([4, 3, 2, 3, 4], 6));
console.log(solution([0, 0, -2, 3], 10));

console.log(solution([10, 5, 2, 3, 7, 5], 10));