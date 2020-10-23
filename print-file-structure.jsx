/*
File System
===========
/home/Desktop/apps/YTM
/home/Desktop/apps/Docs
/home/Downloads/file.pdf
/home/Downloads/song.mp3
/home/Downloads/music
/home/bashrc
/home/text.txt

print out the file structure
============================
home
    Desktop
        apps
        YTM
        Docs
    Downloads
        music
        file.pdf
        song.mp3
    bash.rc
    text.txt
    
*/
Class Node {
    constructor(data){
        this.name
        this.children
    }
}   

function printFileStructure(arrOfArr){
    let objResult = {};
    
    for (i=0; i<arrOfArr.length; i++){
        objResult = createObj(arrOfArr[i], objResult);
    }
    
    return objResult;
}
/*
Home:[Desktop:[apps:[]]]
*/
//node.name & node.children
// [home, Desktop, apps, YTM], [], 0
function createObj(arr, tree, level){
    if (level >= arr.length) {
        return;
    }
    if(tree.contains(arr[level])) {
        createObj(arr, tree, level++);
    } else {
        tree.add(arr[level])
    }
    
    /*
    if (arr.length === level){
        return tree;
    }
    
    
    let pathList = str.split('/'); ///Remove the first forward slash -> substr
    for (i=0; i<pathlist.length; i++){
        
        obj[pathlist[i]]= 
    }
    return obj; */
}









