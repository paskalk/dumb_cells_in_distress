    let arr = [
        [2, 6, 12, 23], 
        [3, 6, 7, 26],
        [3, 4, 9, 18],
        [1, 3, 15, 29]
    ];
    k = 4
    [1]
    
    let arr2 = [
        [],
        []
    ]
    k = 7
    [1,2,3,4]
    [0,1,2,3, 4]
    
    /**
     * arr will always n x m
     * k int
     * return first k-elements array in sorted => arr[a,b, ... kth]
     * example getKArr(arr, 4) => [1, 2, 3, 3] 
     */
    function getKArr(arr, k) {
        let col = arr[0].length;
        let row = 0;
        
        let resultArr = [];
        for (let i = 0; i < k; i++){
        let min = null;
        let posn = 0;
        
        for(let row = 0; row < arr.length; row ++;){
            if (row.length === 0) {continue;}
            if (!min || arr[row][0] < min){
            min = arr[row][0] ;
            posn = row;
            }       
        }
        
        if (!min){
            break;
        }
        
        resultArr.push(min);
        arr[posn].unshift();
        
        }
        return resultArr;
        
    }
    
    /*
    complexity:
    time k*m (k ~ elements in result array; m ~ row in arr)
    space k
    
    1st soln:
    time - (N*M)^2
    space - N*M + k
    
    
    Test:
    Empty array
    Example array (everything in first col; first row all small, the rest all big)
    
    
    input = [], k = 5 return => []
    input = [[1, 2], [3, 4]], k = 7 => return [1, 2, 3, 4]
    input = [[1, 2], [3, 4]], k = 3 => return [1, 2, 3] 
    */