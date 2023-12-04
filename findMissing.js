var arr = [1,4,5];

count = arr.length;

var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (arr.indexOf(i) == -1) {
    missing.push(i);
  }
}

console.log(missing); 