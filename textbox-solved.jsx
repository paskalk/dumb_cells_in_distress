    // Textbox (int w, int h) (int rep pixels) 
    // -----------------------------------
    // |hgfsjebvuwgjfkue,jgfuergfkihfihih|
    // |hgfsjebvuwgjfkue,jgfuergfkihfihi |
    // |iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii|
    // -----------------------------------
    // Given string
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // fontSize int eg 12
    // MAX, MIN 
    // task: 
    // Find the largest font for which the text will fit in the textbox
    // Provided functions
    // height(fontSize) -> return int height of font in pixels
    // charWidth(fontSize, char) -> return int width of char in pixels

    // return int optimal font size
    function getOptimalFont(str, boxHeight, boxWidth) {  
        let difference = max - min; // = 32
        
        while (min - max <= 1){
        let midpoint = Math.floor(difference/2);
        let fits = checkIfTextFits(str, boxHeight, boxWidth, midpoint);
        
        if (fits) {
            min = midpoint;
        } else {
            max = midpoint;
        }    
        }
        
        if (min-max ==== 0){
        return min;
        } else {
        if (checkIfTextFits(str, boxHeight, boxWidth, max)){
            return max
        }
        return min
        }
        
    
        
    }
    
    function checkIfTextFits(str, boxHeight, boxWidth, fontSize){
        
        let rowPixelHeight = height(fontSize)
        let noOfRows = Math.floor(boxHeight/rowPixelHeight) //check for divide by zero
        let boxHeightArr = new Array (noOfRows)
        let currentBoxHeightRow = 0;
        let isAFit = true;
        
        for (let char in str){
        let charWidth = charWidther(fontSize, char);
        
        if (boxHeightArr[currentBoxHeightRow] + charWidth > boxWidth){
            currentBoxHeightRow++;
        } 
        
        if (noOfRows < currentBoxHeightRow){
            isAFit = false;
            break;
        }
        boxHeightArr[currentBoxHeightRow] += charWidth || 0;
        }
        return isAFit;      
    }
/*    
    Tests: 
        Str that exceeds length
        Str that exceeds length
        str that fits
        empty string
        str too long
    
    
    complexity
    Approach 1:
    Time: N*S   (N-range of font sizes & S - string length)
    Space: n - size of boxarray
    
    
    Approach 2:
    LogN * S (N-range of font sizes & S - string length)
    space: same
*/
    
    
    
    
    
    
    
    
    
    
    