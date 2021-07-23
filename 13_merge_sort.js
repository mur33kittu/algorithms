//Like QuickSort, Merge Sort is a Divide and Conquer algorithm.
// It divides the input array into two halves, calls itself for the two halves,
// and then merges the two sorted halves. The merge() function is used for merging two halves.
//  The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r]
//   are sorted and merges the two sorted sub-arrays into one. See the following C implementation for details.

function mergeSort (arr1, arr2) {
  var i = 0;
  var j = 0;
  var results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push (arr1[i]);
      i++;
    } else {
      results.push (arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push (arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push (arr2[j]);
    j++;
  }
  return results;
}

console.log (mergeSort ([1, 10, 50, 98], [2, 14, 99, 100]));

function mergeSingleArraySort (arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor (arr.length / 2);
  let left = mergeSingleArraySort (arr.slice (0, mid));
  let right = mergeSingleArraySort (arr.slice (mid));
  return mergeSort(left, right)
}

console.log (mergeSingleArraySort ([1, 10, 50, 98, 2, 14, 99, 100]));

// better algorithms than prior ones
// O(n^2) to O(n log n)

// algorithm/complexity,       time(best) ,average, worst, space
// merge sort                       O(n log n),O(n log n),O(n log n),O(n)