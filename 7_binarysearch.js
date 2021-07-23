function binarySearch (arr, elem) {
  // divide and conquer works only on sorted arrays
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor ((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    //   console.log(elem, arr[middle])
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor ((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

const a = binarySearch ([2, 5, 6, 9, 13, 15, 28, 30], 13);
console.log (a);


// BIG O - O(log n) - average/worst, O(1) - Best