/*
[a, b, c, d, ...] for 0 < x <= 10 : time taken by task i(index) in cpu
cpu => always pick task with the least amount of time
sequence of task 
total amount of time taken by cpu

[1,3,2] => 6
        => [1,2,3]
*/

// Sort the array [1,2,3]
// create a result object for each CPU -> for n CPUS - obj[CPU]= {'time':0, 'tasks':[]}
// Process: Free CPU takes first item from array [2,3] -> [3]

// CPU finishes: Add task finsihed to a result list [1,2]

/*
[1, 4, 3, 2, 5, 1]

[
c1: [1, 3, 2]
c2: [4, 5]
]
*/

m * n 

function processTasks(taskArr, cpuArr){
    let resultObj = {};
    
    for (let i = 0; i < cpuArr.length; i++){
        resultObj[cpuArr[i]] = {
        'time': 0,
        'tasks': []};
    }
    
    while (arr.length){
        let task = arr.shift();
        let cpu = getLeastBusy(resultObj);
        resultObj[cpu].time += task;
        resultObj[cpu].tasks.push(task);
    }
    
    return resultObj;
}

function getLeastBusy(obj){
    //check time for each CPU
    //retunr least
    
    let minTime;
    let cpuToUse = '';
    
    for (let cpu in obj){
        // if (typeof myVar !== 'undefined')
        if (minTime === undefined || obj[cpu].time < minTime ){
            minTime = obj[cpu].time;
            cpuToUse = cpu;
        }
            
    }
    return cpuToUse;
}

