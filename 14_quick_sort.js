// Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions
// the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

// Always pick first element as pivot.
// Always pick last element as pivot
// Pick a random element as pivot.
// Pick median as pivot.
// The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot,
// put x at its correct position in sorted array and put all smaller elements (smaller than x) before x,
// and put all greater elements (greater than x) after x. All this should be done in linear time.

function pivot (arr, start = 0, end = arr.length + 1) {
  const swap = (arr, index1, index2) =>
    ([arr[index1], arr[index2]] = [arr[index2], arr[index1]]);
  var pivot = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap (arr, swapIdx, i);
    }
  }
  swap (arr, start, swapIdx);
  return swapIdx;
}

function quickSort (arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot (arr, left, right);
    quickSort (arr, left, pivotIndex - 1);
    quickSort (arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log (quickSort ([4, 8, 2, 1, 5, 7, 6, 3]));


// algorithm/complexity,       time(best) ,average, worst, space
// quick sort                  O(n log n),O(n log n),O(n2),O(log n)