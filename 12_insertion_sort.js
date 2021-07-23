// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands.
// The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the
// correct position in the sorted part.
// Algorithm
// To sort an array of size n in ascending order:
// 1: Iterate from arr[1] to arr[n] over the array.
// 2: Compare the current element (key) to its predecessor.
// 3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log (arr);
  }
}
const a = [0, 5, 23, 1, 43, 2, 4, 1];
console.log (insertionSort (a));


// these are roughly equivelant. we can do better

// compare
// algorithm/complexity,       time(best) ,average, worst, space
// bubbleSort                      O(n),    O(n^2),   O(n^2), O(1) - if most of the data are sorted almost, bubble sort works best
// insertionSort                   O(n),    O(n^2),   O(n^2), O(1) - - if most of the data are sorted almost, insertion sort works best
// selectionsort                   O(n^2),    O(n^2),   O(n^2), O(1) - it works for non sorted data, but wont perform well on well sorted array
                                                                        // still looks every element
