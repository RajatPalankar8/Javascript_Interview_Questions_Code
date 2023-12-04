const arr = ['🥚','🐔'];

console.log("🥚 Egg => ",arr[0].charCodeAt(0));
console.log("🐔 Chicken => ",arr[1].charCodeAt(0));

arr.sort();

console.log(arr);

// try {
//     arr.forEach((value,index)=>{
//         if(value == 2){
//           throw new Error();
//         }
//         console.log('Item =>',value)
//     })  
// } catch (error) {

// }

