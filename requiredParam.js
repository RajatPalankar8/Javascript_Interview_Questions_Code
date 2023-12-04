function check(){
    throw new Error(" Param Required");
}

function myFun(param = check() ){
   
    console.log(param);
}


try{
    myFun()
}catch(err){
    console.error(err.message);
}
