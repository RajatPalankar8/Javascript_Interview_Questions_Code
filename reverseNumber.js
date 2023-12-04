var num = 12345;

let result = 0;

while(num > 0){
    rightmost = num % 10;
    result = result * 10 + rightmost;
    num = Math.floor(num / 10);
}

console.log("Reversed Number is => ", result)
