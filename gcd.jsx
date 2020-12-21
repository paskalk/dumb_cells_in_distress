/**
gcd([12, 24])=12
gcd([5, 7]) = 1
gcd([60, 90, 120]) = 30
*/
// return 
// ex 1 arr = [20, 40]
// [12,18]
function getGcd(numArr) {
    let product = 1;
    //Find smallest number in array = sort
    let smallestNumber = getSmallest(numArr);
    
    let primeArr = getPrimeNumbers(smallestNumber);
    
    //Loop from 2 to smallest number
    
    for (let i = 0; i < primeArr.length; i++){
        
        let divisible = true;
        let workingArr = [];
        for (let j = 0; j < numArr.length; j++){
        if (numArr[j] % primeArr[i] !== 0){ 
            divisible = false;
            continue;
        }
        workingArr.push(numArr[j]/primeArr[i]);
        }// [2.5, 5]
        
        if (divisible === true){
        product * primeArr[i]; //2 * 2
        smallestNumber = smallestNumber / primeArr[i]; //5
        i--; //1
        numArr = workingArr;// [5, 10]
        }
    }
        //check if all numbers in array divisible by current number
    
    return product;
}

function getSmallest(arr){
    let sortedArr;
    
    return sortedArr;
}


function getPrimeNumbers(num){
    let primeArr = [];
    for (let i = 2; 1 < num; i++){ // num = 12 i = 9 primeArr= [2, 3, 5, 7]
        let flag = true;
        for (let j = 0; j < primeArr.length; j { j = 1 ... 4
        if (i % primeArr[j] === 0){
            flag = false;
            break;
        }
        }
        if (flag){
        primeArr.push(i);
        }
        
    }
    
    return primeArr;
}

//NLogN + NLogX