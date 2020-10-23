// text msgs
// puff
// hiiigiiii!!!! return [[1,7],[], [8, 11]]
// exclamation - repetition of characters >= 3
// write a function return array of arrays positions where exclamation starts and stops

// return array of int arrays
// lkjiii [[], [], []]
function exclamationPoints(msg) { //hiiiiggg
    //Use a for loop
    let repeatcharacters = [];
    let min;
    let max;
    let count = 1;
    let arrIndex = 0;
    //loop fro str
        //character equal to last
        //count of chars passed 3
            //create an array  (min, max) 	
                //update maximum
    
    if (msg.length < 2) return repeatcharacters; 
    
    for (i = 1; i < msg.length; i++){ //i=7
        if (msg[i] === msg[i-1]){ 
            
            min = i - count; //5
            max = i; //7
            count++; //3
        if (count >= 3){
            repeatcharacters[arrIndex] = [min, max]; //[[],[1,4],[5,7]]
            if (mgs[i] === msg[i + 1] && i < length -1) 
                arrIndex++;
        }
        continue;   
    }
    count = 1;
    
    
    }
    return repeatcharacters;
}