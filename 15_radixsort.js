// average sort comparison
// comparison sort:

// Bubble sort - O(n^2)
// Insertion sort - O(n^2)
// Selection Sort - O(n^2)
// Quick Sort - O(n log(n))
// Merge Sort - O(n log(n))

// The lower bound for Comparison based sorting algorithm (Merge Sort, Heap Sort, Quick-Sort .. etc) is Ω(nLogn), i.e., they cannot do better than nLogn.

// Counting sort is a linear time sorting algorithm that sort in O(n+k) time when elements are in the range from 1 to k.

// What if the elements are in the range from 1 to n2?
// We can’t use counting sort because counting sort will take O(n2) which is worse than comparison-based sorting algorithms. Can we sort such an array in linear time?

// Radix Sort is the answer. The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.

function getDigit (num, place) {
  return Math.floor (Math.abs (num) / Math.pow (10, place) % 10);
}

function digitCount (num) {
  if (num === 0) return 1;
  return Math.floor (Math.log10 (Math.abs (num))) + 1;
}

function maxDigits (nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max (maxDigits, digitCount (nums[i]));
  }
  return maxDigits;
}

function radixSort (nums) {
  let bigDigit = maxDigits (nums);
  for (let k = 0; k < bigDigit; k++) {
    let digitBuckets = Array.from ({length: 10}, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit (nums[i], k);
      digitBuckets[digit].push (nums[i]);
    }
    nums = [].concat (...digitBuckets);
  }
  return nums;
}

console.log (radixSort ([23, 345, 5467, 12, 2345, 9852]));

// algorithm/complexity,       time(best) ,average, worst, space
// quick sort                  O(nk), O(nk), O(nk), O(n+k)
