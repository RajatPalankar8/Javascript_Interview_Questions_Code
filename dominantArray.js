const prompt = require('prompt-sync')();
function isDominantElementPresent(arr) {
   
   var count = {};
   arr.forEach(ele=>{
    if(count[ele]){
        count[ele] +=1;
           
    }else{
        count[ele] = 1;
    }
});

var maxFrequency = 0;
 for (var ele in count) {
            maxFrequency = Math.max(maxFrequency, count[ele]);
    }
    var isDominant = Object.values(count).filter(freq => freq === maxFrequency).length === 1;
    
return isDominant;
}

function main() {
    const t = parseInt(prompt("Enter the number of test cases:"));

    for (let i = 0; i < t; i++) {
        const n = parseInt(prompt("Enter the size of the array:"));
        const arr = prompt("Enter the array elements separated by space:")
            .split(" ");

        if (isDominantElementPresent(arr)) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}

main();