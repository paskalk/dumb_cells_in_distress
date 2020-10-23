async executeStatement(query, onSuccess, onFailure){

        let  temp = await this.pgConnection.query('select now()', (err, res) => {
            if (err){
                console.log(err);
            }
           onSuccess(res);
        }) // => return undefined... 
}


async getRepaymentsUploads() {
	await this.executeStatement(
  'select customerid, seasonid, date, amount, processed from repaymentuploads limit 3', 
  res => {
    console.log(res);
    // do other stuff
  }
  );
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

const res = { values: [
  { name: "Tom" },
  { name: "Steve" },
]};


let filtered = res['values'].filter(person => {
  // is name starts with S 
  return true
  // other condinal
  // return false;
})



function processRepaymenrsList() {
	data.getRepaymentUploads(this.handleRepaymentResults);
}

function handleRepaymentResults(results) {
  for (let entry in results) {
      // handle each entry
  }
}











