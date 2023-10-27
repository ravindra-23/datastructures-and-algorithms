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

// Left Rotate the Array by One

const leftRotate = (arr) => {
  const firstElement = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstElement;
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(leftRotate(arr));

//rotating array of elements by k elements either left or right.

const rotate = (arr, k, direction) => {
  const n = arr.length;

  let rotated = [];
  for (let i = 0; i < arr.length; i++) {
    let newPosition;

    if (direction === "left") {
      newPosition = (i - k + n) % n;
    } else if (direction === "right") {
      newPosition = (i + k) % n;
    } else {
      throw new Error("Invalid Direction");
    }
    rotated[newPosition] = arr[i];
  }
  return rotated;
};

const numsArr = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(numsArr, 2, "left"));

// Move all Zeros to the end of the array

//Brute force approach

const zeroArr = [1, 0, 2, 3, 0, 4, 0, 1];

const moveZeros = (arr) => {
  let nonZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZeros.push(arr[i]);
    }
  }
  const nz = nonZeros.length;

  for (let i = 0; i < nz; i++) {
    arr[i] = nonZeros[i];
  }

  for (let i = nz; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};

console.log(moveZeros(zeroArr));

//Method 2

const moveZeros2 = (arr) => {
  const nonZeros = arr.filter((num) => num > 0);
  const zeros = arr.filter((num) => num === 0);
  console.log([...nonZeros, ...zeros]);
};

console.log(moveZeros2(zeroArr));

//Optimal Approach

const moveZerosOptimal = (arr) => {
  let left = 0; //pointer for nonzero element
  let right = 0; //poiinter for all elements

  while (right < arr.length) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
    right++;
  }
  return arr;
};

console.log(moveZerosOptimal([5, 2, 0, 1, 0, 6, 8, 0]));

// Linear Search

const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

//Not optimal

const linearSearch2 = (arr, num) => {
  let index = -1;
  arr.forEach((el, i) => {
    if (el === num) {
      index = i;
    }
  });
  return index;
};

console.log(linearSearch([5, 10, 7, 6, 9], 7));
console.log(linearSearch2([5, 10, 7, 6, 1], 5));

// Find Union of two arrays

const findUnion = (arr1, arr2) => {
  let set = new Set();
  let union = [];

  for (let num of arr1) {
    set.add(num);
  }
  for (let num of arr2) {
    set.add(num);
  }

  for (let num of set) {
    union.push(num);
  }
  return union;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [2, 3, 4, 4, 5, 7];
// console.log(findUnion(array1, array2));

// Optimal

const union = (arr1, arr2) => {
  let union = [];
  let i = 0; //pointer for array1
  let j = 0; //pointer for array2

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (union[union.length - 1] !== arr2[j]) {
        union.push(arr2[j]);
      }
      j++;
    } else {
      //this else runs when arr1[i] === arr2[j]
      if (union[union.length - 1] !== arr1[i]) {
        union.push(arr1[i]);
      }
      i++;
    }
  }

  while (i < arr1.length) {
    if (union[union.length - 1] !== arr1[i]) {
      union.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2[j]) {
    if (union[union.length - 1] !== arr2[j]) {
      union.push(arr2[j]);
    }
    j++;
  }

  return union;
};

console.log("Union:", union(array1, array2));

// Find the missing element

const findElement = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return `Missing element is: ${i + 1}`;
    }
  }
  return "No missing elements";
};

console.log(findElement([1, 2, 4, 5]));

//
