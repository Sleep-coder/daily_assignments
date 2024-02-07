let arr = ["Aarush", 90, 98, null, "People", undefined];
let sum = 0;
const array = function (arr) {
  for (let value of arr) {
    if (!isNaN(value)) {
      sum = sum + value;
    }
  }
  return sum;
};
console.log(array(arr));
