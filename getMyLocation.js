// (()=>{
//     navigator.geolocation.getCurrentPosition((position)=>{
//         console.log(position.coords);
//     })
// })();

function myLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(position.coords);
    })
}
myLocation();

