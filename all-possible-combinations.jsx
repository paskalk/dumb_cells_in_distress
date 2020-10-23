/*
(2,5), (4,5), (3,5) ...
assumption range (a, b) => a <= b
all possible combinations such that only one number is picked per group
243

(1,2), (1,2), (1,2)
[1,2]
[11,12, 21, 22]
[111, 112, 121, 122, 211, 212, 221, 222]
[111,112,121,122,211,212,221,222]

refList = [1, 2]
workingList[4]
loop 2 list
workingList.push([1 + list[i]])
workingList = [11, 12]
refList = workingList
*/

// Loop through each sub-list

/*
rL = []
list[i = 0]
wL = [1, 2]
rl = wl
-----------------
rl = [1, 2]
list[i = 1] = [1, 2]
wl = []
loop through rl = [1, 2] = rlI
loop[i = 1] => loopIndex
    element = rl[rlI] + loop[loopIndex]
    wl.push(element) rlI = 0, loopIndex = 0 element = 11
endloop
endloop
wl = (11, 12, 21, 22)
rl = wl
-----------------------------
*/

function getAllCombinations(listOfLists){
    let result = [];

    for (i = 0; i < listOfLists.length; i++){
        let tempArr = [];
        if (i === 0)
            tempArr = listOfLists[0];
            
        for (j=0; j < result.length; j++){
            let rangeMin = listOfLists[i][0];
            let rangeMax = listOfLists[i][1];
            for (k = rangeMin; k <= rangeMax; k++){
                tempArr.push(parseInt((result[j].toString().concat(k))));
            }
        }

        result = tempArr;
    }
    return result;
}

console.log("expect: \n [ 1, 2 ] \n", getAllCombinations([[1,2]]));
console.log("expect: \n [ 11, 12, 13, 21, 22, 23 ]\n", getAllCombinations([[1,2],[1,3]]));
console.log("expect: \n [ 111, 112, 121, 122, 211, 212, 221, 222 ]\n", getAllCombinations([[1,2],[1,2],[1,2]]));

    
    
    

