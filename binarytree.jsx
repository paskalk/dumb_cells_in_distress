// 1 greatGreatGranny, children
// 2 greatGrannies, children
// 3 granies, children
// 4 momies, children
// 5 child, children: []

// Node {name: "", children: [nodes...]}

function findWidestGeneration(greatGreatGranny) {
  
    //check if empty
    
    let generations = [0];
    let que = [greatGreatGranny,'stop'];
    
    while (que.length > 1){
      let node = que.shift();
      if (node === 'stop'){
        que.push('stop');
        generations.push(0)
      }
      
      generations[generations.length - 1] ++;
      que.push(...node.children);
    }
    
    let max = Math.max(...generations);
    
    let generationNumber = 0;
    
    for (let i = 0; i < generations.length; i++){
      if (generations[i] === max ){
        generationNumber = i;
      }
    }
    
    return generationNumber;
    
  }
  