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
table = new Array(2001)
numItems = 0;



//setting value in array,
//passing key to hash function to get key converted into int.
//storing value of table index of that hash number.
//handling collisions by 'chaining'. instead of storing just the value, 
//we store the key, and the value inside of an array.
setItem = (key, value) => {


const index = hashStringToInt(key, this.table.length)

if(this.table[index]){
this.table[index].push([key, value])
}else{
    this.table[index] = [[key, value]]
    this.numItems++;
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

const table = new HashTable();
table.setItem('firstName', 'John')
// table.getItem('firstName');
table.setItem('age', 'Doe')
// table.getItem('lastName');
table.setItem('lastName', 'Doe')

// table.setItem('age', '15')
// table.getItem('age');
// table.setItem('glaks', 'f')
// table.getItem('glaks');
table.setItem('glaks', 'f')
// table.getItem('glaks');
// table.setItem('bill', 'f')
// table.getItem('bill');
// console.log(table.table)
console.log(table.numItems)
// console.log(table.getItem('firstName')) 
// console.log(table.getItem('lastName')) 