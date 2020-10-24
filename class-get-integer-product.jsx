/*
class 
initialize int k,
insert integers => positive int
get() -> int product of last k elements inserted

[4, 5, 3, 5, 0, 5, 4, 5] 9
k = 3

4
20
60 = => x  ++[4, 5, 3,]
x/4 * 5 => x  ++ [4, 5, 3, 5]
x/5 * 3 => x  ++ [4, 5, 3, 5, 3]
x/3 * 5 => x


[2, 0, 5, 3, 2]   k=2
2
0
0*5/2 = 0
3*5/0 = err
2*3/5 = 




*/

class IntegerOperations {
    constructor(k){
        this._k = k;
        this._store = [];
        this._product = 1;
        this._zeroCheck = false;
        this._zeroCheckStack = [];
        this._valStoreStack= [];
    }

    insert(val){
        
        this._store.push(val);
        console.log(this._zeroCheck);
        console.log('curr: ', val,'lastVal: ', this._store[this._store.length - this._k - 1]);
        if (this._store.length > this._k){
            let lastVal = this._store[this._store.length - this._k - 1];
                
            if (lastVal === 0){
                if (this._valStoreStack.length){
                    console.log('here');
                    // this.product = lastVal;
                    console.log(this._valStoreStack);
                    this._zeroCheckStack.pop();
                    this.product = this._valStoreStack.pop();
                }
                lastVal = 1;
            } 

            if (val === 0){
                this._zeroCheckStack.push(0);
            } else {
                if (this._zeroCheckStack.length){
                    this._valStoreStack.push(val);

                    lastVal = 1;
                }  
                // console.log('here');
                // console.log(this._zeroCheck);
                
            }
            
            
            this._product = this._product / lastVal * val;//
        } else {
            this._product *= val;
        }
        console.log('prod: ',this._product);
        
    }

    // insert(val){
        
    //     this._store.push(val);
    //     console.log(this._zeroCheck);
    //     console.log('curr: ', val,'lastVal: ', this._store[this._store.length - this._k - 1]);
    //     if (this._store.length > this._k){
    //         let lastVal = this._store[this._store.length - this._k - 1];
                
    //         if (lastVal === 0){
    //             this._zeroCheck = true;
    //             lastVal = 1;
    //         } else {
    //             // console.log('here');
    //             // console.log(this._zeroCheck);
    //             if (this._zeroCheck){
    //                 this._zeroCheck = false;
    //                 lastVal = 1;
    //             }        
    //         }
            
            
    //     this._product = this._product / lastVal * val;//
    //     } else {
    //         this._product *= val;
    //     }
    //     console.log('prod: ',this._product);
        
    // }

    get(){
        return this._product;
    }
}


prod = new IntegerOperations(2);

prod.insert(3);
prod.insert(0);
prod.insert(5);
prod.insert(4);
prod.insert(3);

console.log(prod.get());

