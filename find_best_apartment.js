
const Blocks = [
    {
      "id": 1,
      "gym": false, // 1
      "school": true, // 0
      "store": false // 4
    },
    {
      "id": 2,
      "gym": true, // 0
      "school": false, // 1
      "store": false // 3
    },
    {
      "id": 3, 
      "gym": true, // 0
      "school": true, // 0
      "store": false // 2
    }, 
    {
      "id": 4,
      "gym": false, // 1
      "school": true, // 0
      "store": false // 1
    },
    {
      "id": 5,
      "gym": false, // 2
      "school": true, // 0
      "store": true // 0
    },
  ]
  
      
  let Reqs = ["gym", "school", "store"]
  
  
  function (blocks, reqs){
  
    const leastDistance = 0;
    let perfectBlock = {};
    
    for (let i = 0; i < blocks.length; i++){//n
      const curBlock = blocks[i];
      
      const curDistance = Object.keys(curBlock).reduce((acc, cur) => { //r
        let value = 0;
        if (!curBlock[cur]){ // gym =  false
         value = findNearest(cur, blocks, i);
        }
  
        return {..acc, curBlock[cur]: value };
      }, {});
    
      let maxCurBlock = Math.max[...Object.values(curDistance)];
     if (maxCurBlock < leastDistance){
        leastDistance = maxCurBlock;
        perfectBlock = curBlock;
      }
    }
  
    return perfectBlock;
  }
  
  
  function findNearest(key, blocks, index, step = 0){
    if (blocks[index][key])
      return step;
    
    // check bounds
    if (index < 0 && blocks.length < index)
      return step;
    
    let left = findNearest(key, blocks, index+1, step++);
    let right = findNearest(key, blocks, index-1, step++); 
    
    return left > right ? right: left;
  }
  