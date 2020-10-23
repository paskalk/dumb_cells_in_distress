    // 1 greatGreatGranny, children
    // 2 greatGrannies, children
    // 3 granies, children
    // 4 momies, children
    // 5 child, children: []


    /// A => check, check children, move to parents
    // pA => check, check children, move to parent
    // gA => check, check children, move to ggP
    // ggA => check, check children,

    // Node {name: "", children: [nodes...], firstParent: node, secondParent: Node}
    // Related share common ancestry 
    // return true or false
    function areRelated(childA, childB) {
    
        let que = [childA, 'stop'];
        let count = 0
        let status = false;
        
        while (que.length){//check if the count has exceeded 8
        let node = que.shift();
        
        if (node === 'stop'){
            count++;
            
            if (count > 4){
            break;
            }
            que.push('stop');
            continue;
        }
        
        if (node === childB){
            status = true;
            break;
        }
        
        if (node.children){
            
            status = children (node.children, childB);
            if (status === true){
            break;
            }
        }
        
        que.push(node.firstparent, node.secondparent);
        }
    
        
        return status;
        
        
    }
    
    function children(children, childB){
        let status = false;
        children.push('stop');
        
        let count = 0;
        
        while(children.length){
        let node = children.shift();
        if (node.visited){
            continue;
        }
        if (node = 'stop'){
            count++;
            children.push('stop');
            continue;
        }
        
        if (count > 4){
            break;
        }
        
        if (node === childB){
            status = true;
            break;
        }
        
        node.visited = true;
        
        children.push(...node.children)
        
        }
        
        return false;
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    