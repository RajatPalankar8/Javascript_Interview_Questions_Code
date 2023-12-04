let arr = [-1,1,4,0,3,0,9,8,0];

function move_zero_to_end(){
    var onlyposNeg = arr.filter((item)=> (item > 0 || item < 0));

    var onlyZero = arr.filter((item)=> item == 0);

    return [...onlyposNeg,...onlyZero];
}

var newArr = move_zero_to_end()

console.log(newArr);

