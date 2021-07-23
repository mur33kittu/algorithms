// similar to bubble sort, instead of placing large values first, it will place smaller values into sorted position

// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
// Following example explains the above steps:

// easy to implement and better than bubble sort

function selectionSort (arr) {
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap (arr, i, lowest);
    }
  }
  return arr
}

const a = [0, 5, 23, 12, 43, 2, 4, 1];
console.log (selectionSort (a));

// const a = [8, 1, 2, 3, 4, 5, 6, 7];
// console.log (a);
