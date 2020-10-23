    // [2, 8, 6, 2, 5, 4, 8, 3, 7] => [index 8 - index 7] * height = 49
    //  1, 2, 3, 4, 5, 6, 7, 8,
    // https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
    // Find max area bound by the walls

    // hi -> index i = 6
    // hj -> index j = 4

    // return int 
    function findMaxArea(heights) {
        //0, 1, 
        let max = 0;
        
        for (let i = 0; i <= heights.length; i++){//x=0   
            for (let j = i; j < heights.length; j++){
            let height = height[j] < height[i] ? height[j] :height[i] ;//8 
            
            let width = Math.abs(j - i); //1
            
            
            if (max < height * width){ 
                max = height * width;//8
            }
            
            }
        }
        
        return max;
        
    }
    
    [1, 2, 3, 4, 5]
    [6, 5, 3, 4]
    [3, 6, 5, 4]
    [3, 4, 6, 5]
    [3, 4, 5, 6]
    [3, 4, 5, 6]
    // i = 0 [[2, 2], [2, 8], [2, 6], [2, 2] .... ]
    // i = 1 [[8, 2], -> [8, 8], [8, 6], ]
    // i = 2 [[6, 2], [6, 8], ->  [6, 6]]