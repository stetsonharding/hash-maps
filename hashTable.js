/* **Hash Table** */
//A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched. 



/*Hash function.. Used to Uniquely identify a spacific object from similar objects.*/
//Creates a uniue key for each object.
hashStringToInt = (key, tableLength) => {
    //Chose a prime number to spread out where the keys are stored in table.
    let hashCode = 17;
    //loop through key passed in, generate key by charCode and hashing formula.
    for(let i = 0; i < key.length; i++){
        hashCode = (13 * hashCode * key.charCodeAt(i)) % tableLength;
    }
    return hashCode;
}



class HashTable {
//creating array with this syntax beacuse we want the array a certain size to start off with.
table = new Array(2000)
//keeping track of how many items are in table.
numItems = 0;

///This function will increase the length of the table automatically if ever needed.
resize = () => {
    //new table formula to increase size of table to double of current length.
    const newTable = new Array(this.table.length * 2);

       //loop through table.
       this.table.forEach(item => {
           //if there is an item in the table
        if(item){
            //loop through this items array
           item.forEach(([key,value]) => {
               //generate new index using hashing function
               const index = hashStringToInt(key, newTable.length)
               //if new table already has this index, add this item to the array.
               if(newTable[index]){
                newTable[index].push([key, value])
                }else{
                    //create new array to new table
                    newTable[index] = [[key, value]]
                }
           })
        }
    })
    this.table = newTable
}



//creates a new item in table.
setItem = (key, value) => {
    //increments the number of items in the table by 1.
    this.numItems++;

//formula of how full the hash table is allowed to get before its capacity is automatically increased.
const loadFactor = this.numItems / this.table.length;

//if table is 80% full, call our resize function increase length of table.
if(loadFactor > .8){
    this.resize();
}

 //generate new index using hashing function
const index = hashStringToInt(key, this.table.length)

  //if table already has this index, add this item to the array.
if(this.table[index]){
this.table[index].push([key, value])
}else{
      //add new array to table.
    this.table[index] = [[key, value]]
  }
}



//get spacific item from table based on key passed in.
getItem = (key) => {
    //generate index using hashing function
    const index = hashStringToInt(key, this.table.length)

    //if there is nothing in the table with this index 
    if(!this.table[index]){
        return null;
    }
    //loop through tables at specified index index, look at first element and check if that element is === to key passed in.
    //if so return the 2nd element of that array (value)
    return this.table[index].find(x => x[0] === key)[1];
   }
}



const myTable = new HashTable();
/* Testing */
myTable.setItem('firstName', "John")
console.log(myTable.getItem('firstName')) //john
myTable.setItem('lastName', 'doe')
console.log(myTable.getItem('lastName')) // doe
myTable.setItem('age', 22)
console.log(myTable.getItem('age')) // 22
console.log(myTable.numItems) //3 - beacuse we added 3 items to our table.. if this number was 80% of 2000 (our table length) our table would double in size due to the resize function implimented.
console.log('length: ' + myTable.table.length) // 2000



