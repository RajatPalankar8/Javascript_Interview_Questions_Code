const keys = ['name', 'age', 'city'];
const values = ['Rajat', 26, 'New York'];

// { name: 'Rajat', age: 26, city: 'New York' }
const inObject = keys.reduce((obj,key,index)=>{
    obj[key] = values[index];
    return obj
},{})

console.log(inObject);









