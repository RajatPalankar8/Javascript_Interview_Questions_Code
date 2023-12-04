const arr = [1,2,3,4,5];

try {
    arr.forEach((value,index)=>{
        if(value == 2){
          throw new Error();
        }
        console.log('Item =>',value)
    })  
} catch (error) {

}

