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
table = new Array(17)


//setting value in array,
//passing key to hash function to get key converted into int.
//storing value of table index of that hash number.
setItem = (key, value) => {
const index = hashStringToInt(key, this.table.length)
this.table[index] = value;
}


//getting value in the array, based on the key.
//passing key to hash function to get converted into int.
//taking that int and passing it as the index of the array.
getItem = (key) => {
    const index = hashStringToInt(key, this.table.length)
    return this.table[index]
   }
}

const table = new HashTable();
table.setItem('firstName', 'John')
table.getItem('firstName');
table.setItem('lastName', 'Doe')
table.getItem('lastName');

console.log(table.getItem('firstName')) //John
console.log(table.getItem('lastName')) //Doe