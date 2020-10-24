/*
world = Array[][]
world[i][j] = 0/1;
0: water
1: land
outside grid: water
find the largest continent


=> Check grid bounds

*/

function largestContinent(worldArr){
  //Traverse world
  //Find expanse of land
  //find largest land
    let result = 0;
    let worldArrObj = [];
    let maximum = 0;
    
    for (let i=0; worldArr.length; i++){
        for (let j = 0; j < worldArr[i].length; j++){
        worldArrObj[i][j] = {
            value: worldArr[i][j],
            visited: false
        }
        }
    }
    
    for (let i=0; worldArrObj.length; i++){
        for (let j = 0; j < worldArrObj[i].length; j++){
        let position = worldArrObj[i][j].value;
        
        if (position === 1){
            let count = findExpanse(i, j, worldArrObj);//0,0 => 3 | copy (0,1) -> not visited => 3 | by reference (0, 1) -> visited => 0 
            if (maximum < count){
            maximum = count;
            }
        }
        }
    }
    
    return maximum;

}

function findExpanse(x,y,worldArr, count = 0){
  //check 4 sides
    // if land, recurse and increment a counter else continue
    if (worldArrObj[i][j].visited === true || x >= worldArr.length || x < 0 || y >= worldArr.length || y < 0){
        return 0;
    }
    
    
    worldArrObj[x][y].visited = true;
    
    if (worldArr[x+1][y] === 1){
        count += findExpanse(x+1, y, worldArr, count);
    }
    
    if (worldArr[x-1][y] === 1){
        count += findExpanse(x-1, y, worldArr, count);
    }
    
    if (worldArr[x][y+1] === 1){
        count += findExpanse(x, y+1, worldArr, count);
    }
    
    if (worldArr[x][y-1] === 1){
        count += findExpanse(x, y-1, worldArr, count);
    }
    
    

    count++;
    return count; 
}

1,1,0,1
0,1,0,1
0,0,1,1
// copy [3, 3, 4, 3, 4, 4, 4]
// ref  [3, 0, 4, 0, 0, 0, 0]

t,f,f
f,f,f
f,f,f