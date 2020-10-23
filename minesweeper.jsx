    /*
    Q:: Create mine sweeper game
    */

    /*
    * ---RULES---
    * grid => matrix
    * mines => blow/not blow
    * clickCell
    * 
    * 0 = BOMB
    * 1 = Normal Cell
    * 2 = Clicked Cell
    * 
    */


    class MineSweeper {
        constructor(size) {
            this.grid =  [];
            this.gameActive = true;

            for (let i = 0; i < size; i++){
                let row = new Array(size);
                this.grid.push(row.fill(1));
            }
        }

        insertMines() { 
            /* Total number should be 1/5 */
            let mines = Math.floor(this.grid.length * this.grid.length * 0.2);
            
            for (let i = 1; i <= mines; i++){
                let x = Math.floor(Math.random() * this.grid.length);
                let y = Math.floor(Math.random() * this.grid.length);
                console.log({x, y})
                this.grid[x][y] = 0;
                
            }
        }

        clickCell(x, y) {
            console.log('Before:' ,this.grid)
            console.log (`clicked: [${x},${y}] `, this.grid[x][y]);
            if (this.grid[x][y] === 0 || this.gameActive === false){
                return this.gameActive = false;
            }
            // mine can blow => Game Over
            // process cell and expand => processCell

            this.processCell(x, y);
            console.log('After:' ,this.grid)
        }

        processCell(x, y){
            if (this.grid[x][y] === 0)
                return this.gameActive = false;

            if (this.grid[x][y] === 2)
                return;

            this.grid[x][y] = 2;

            if (x-1 >= 0 && this.grid[x-1][y]){
                this.processCell(x-1,y);
            }
            if (x+1 < this.grid.length && this.grid[x+1][y]){
                this.processCell(x+1,y);
            }
            if (y-1 >= 0 && this.grid[x][y-1]){
                this.processCell(x,y-1);
            }
            if (y+1 < this.grid.length && this.grid[x][y+1]){
                this.processCell(x,y+1);
            }
        }

        xprocessCell(x, y) {
            // check if within bounds
            // if mine (leave)
            // if visited (leave)
            // else update as visited
            // this.processCell(x-1, y)
            // processCell(x, y - 1)
            // processCell(x + 1, y)
            // processCell(x, y + 1)

        }
    }


    let game = new MineSweeper(3);
    game.insertMines();

    game.clickCell(0,0);


    // update UI
    // cell.setOnClickListener(x, y) 
    // game.clickCell(x,y);
    // update ui
    