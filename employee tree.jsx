/**
EMP1 9.5
  EMP2 4
    EMP5 1
    EMP6 1
    EMP7 1
  EMP3 3
    EMP8 1
    EMP9 1
  EMP4 1.5
    EMP10 0.5

everyone 1
fte -> 
intern -> 0.5
*/



function getWeight(empl) { // 
    //[4]->2
    //[1]->10
    
      if (!empl){
        return 0;
      }
    
      const arr = [empl];
      const count = 0;
    
      while(arr.length){
        const node = arr.shift();
        
        arr.push(...node.children);
        
        if (node.type === 'intern'){
          count += 0.5;
        } else {
          count += 1;
        }
        
        
      }
      return count;
    
  }