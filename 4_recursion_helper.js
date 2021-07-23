function collectEvenValues (arr) {
  let result = [];

  function helper (input) {
    if (input.length === 0) {
      return;
    }
    if (input[0] % 2 === 0) {
      result.push (input[0]);
    }
    helper (input.slice (1));
  }
  helper (arr);
  return result;
}

const a = collectEvenValues ([2, 3, 1, 4, 5, 6, 8, 10]);
console.log (a);
