//Find the largest element in the array
// Using Sorting
const array = [8, 10, 5, 20, 9];

const largestElement = (arr) => {
  const sorted = array.sort((a, b) => a - b);
  return sorted[sorted.length - 1];
};

console.log(largestElement(array));

// Using For Loop (brute force)

const largestElementLoop = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(largestElementLoop(array));
