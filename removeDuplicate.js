let array = [1, 2, 3, 4, 4, 5, 6, 6];


for(let i = 0;i<array.length;i++){
    let currentItem = array[i];
    let firstIndex = array.indexOf(currentItem);

    // Here i and firstIndex should match, if not then it 
    // means that item is duplidate.
    if(firstIndex !== i){
        array.splice(i,1)
        i--;
    }
}

console.log(array);