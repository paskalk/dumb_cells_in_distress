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
    //Loop through font sizes
    //0, 1, 2, ... 16, .... 32
    let min = 10;
    let max = 13;
    let currentMaxFont;
    for (let i  = min; i <= max; i++){
        let istrue = checkIfTextFits(str, boxHeight, boxWidth, i);
        if (istrue){
            currentMaxFont = i;
        }

    }
    
}

function checkIfTextFits(str, boxHeight, boxWidth, fontSize){
    
    // pixelsPerRow =  height(ft)
    
    //let totalStrWidth = [boxHeight/pixels]
        //loop through string
            //get widtho of char
        //check if totalStrWidth[0] + width > boxWidth
        // determine which pos'n
        //check if it's maximum height reached
            //totalStrWidth[1]
        //
        //else
            //totalStrWidth[0] = width
    debugger;
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