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

// Find the Second smallest and second largest element in the array

// Better Aprroach

const smallestLargest = (arr) => {
  let smallest = Infinity;
  let second_smallest = Infinity;
  let largest = -Infinity;
  let second_largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    smallest = Math.min(smallest, arr[i]);
    largest = Math.max(largest, arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < second_smallest && arr[i] !== smallest) {
      second_smallest = arr[i];
    }
    if (arr[i] > second_largest && arr[i] !== largest) {
      second_largest = arr[i];
    }
  }

  console.log(second_largest, second_smallest);
};

smallestLargest(array);

// Optimal Approach

const secondSmallest = (arr) => {
  let smallest = Infinity;
  let second_smallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      second_smallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < second_smallest && arr[i] !== smallest) {
      second_smallest = arr[i];
    }
  }

  console.log(smallest, second_smallest);
};

const secondLargest = (arr) => {
  let largest = -Infinity;
  let second_largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second_largest = largest;
      largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] !== largest) {
      second_largest = arr[i];
    }
  }

  console.log(largest, second_largest);
};

secondLargest([1, 2, 3, 4, 7]);

// Check if array is sorted

// Brute force approach

const isSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(isSorted([1, 2, 3, 6, 5])); //false
// console.log(isSorted([1, 2, 3, 4, 5])); //true

// Optimal Approach

const isSorted2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(isSorted2([1, 2, 3, 6, 5])); //false
// console.log(isSorted2([1, 2, 3, 4, 5])); //true

// Remove Duplicates

//Brute force approach

const removeDuplicates = (arr) => {
  const unique = new Set(arr);
  const uniqueArr = Array.from(unique);
  for (let i = 0; i < uniqueArr.length; i++) {
    arr[i] = uniqueArr[i];
  }
  console.log("arr:", arr);
  return uniqueArr.length;
};

const nums = [1, 2, 3, 5, 2, 1, 5];

const k = removeDuplicates(nums);
console.log("The array after removing duplicates:");
for (let i = 0; i < k; i++) {
  console.log(nums[i]);
}

// Optimal Approach
const nums2 = [1, 1, 2, 2, 2, 3, 3];

const removeDuplicatesOptimal = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr);
  return i + 1;
};

const k2 = removeDuplicatesOptimal(nums2);

console.log("The array after removing duplicates:");
for (let i = 0; i < k2; i++) {
  console.log(nums2[i]);
}
