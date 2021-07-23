function collectEvenValues (arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 === 0) {
    newArr.push (arr[0]);
  }
  newArr.concat (collectEvenValues (arr.slice (1)));
  return newArr;
}

const a = collectEvenValues ([2, 3, 1, 4, 5, 6, 8, 10]);
console.log (a);
