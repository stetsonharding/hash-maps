const { ContactlessOutlined } = require("@material-ui/icons");

//converts key string to number.
hashStringToInt = (s, tableLength) => {
    //chose a prime number to spread out where the key are stored.
    //loops through string, get character code for each letter, storing it in hashCode.
    //modulus stored number by table length so the number does not get to big.
    //return hashcode.
    let hashCode = 17;
    for(let i = 0; i < s.length; i++){
        hashCode = (13 * hashCode * s.charCodeAt(i)) % tableLength;
    }
    return hashCode;
}


class HashTable {
//creating array with this syntax beacuse we want array a certain size to start off with.
//keep track of how many items are in your table.
table = new Array(2006)
numItems = 0;

//resize table
resize = () => {
    const newTable = new Array(this.table.length * 2);
   

       //re hash every element in the new table.
       this.table.forEach(item => {
        if(item){
           item.forEach(([key,value]) => {
               const index = hashStringToInt(key, newTable.length)
               if(newTable[index]){
                newTable[index].push([key, value])
                }else{
                    newTable[index] = [[key, value]]
                }
           })
        }
    })
    this.table = newTable
}

//setting value in array,
//passing key to hash function to get key converted into int.
//storing value of table index of that hash number.
//handling collisions by 'chaining'. instead of storing just the value, 
//we store the key, and the value inside of an array.
setItem = (key, value) => {
    this.numItems++;
//measure of how full the hash table is allowed to get before its capacity is automatically increased.
const loadFactor = this.numItems / this.table.length;



if(loadFactor > .8){
    // call resize table
console.log('resizing?')
    this.resize();
 
}

const index = hashStringToInt(key, this.table.length)

if(this.table[index]){
this.table[index].push([key, value])
}else{
    this.table[index] = [[key, value]]
 
}


}


//getting value in the array, based on the key.
//passing key to hash function to get converted into int.
//taking that int and passing it as the index of the array.

//looping through table, finding the key that matches the key being passed in, 
//returning the 2nd item in the array with the specified key.
getItem = (key) => {
    const index = hashStringToInt(key, this.table.length)

    if(!this.table[index]){
        return null;
    }
    return this.table[index].find(x => x[0] === key)[1];
   }
}

const myTable = new HashTable();

myTable.setItem('firstName', "John")
console.log(myTable.getItem('firstName'))
myTable.setItem('lastName', 'doe')
console.log(myTable.getItem('lastName'))
myTable.setItem('age', 22)
console.log(myTable.getItem('age'))
console.log(myTable.table)
console.log('length: ' + myTable.table.length)



