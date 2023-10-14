// Problem Statement: Given an integer N, print the following pattern. for example N=3
// ***
// ***
// ***

const getPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

getPattern(5);

// Given an integer N, print the following pattern :
// Input Format: N = 3
// Result:
// *
// * *
// * * *

const trianglePattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      //restrict the inner loop to run only row + 1 times.
      row += "* ";
    }
    console.log(row);
  }
};

trianglePattern(5);

// Problem Statement: Given an integer N, print the following pattern :
// Input Format: N = 3
// Result:
// 1
// 1 2
// 1 2 3

const triangleNumPattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += j + 1;
    }
    console.log(row);
  }
};

triangleNumPattern(10);

// Given an integer N, print the following pattern :
// Input Format: N = 3
// Result:
// 1
// 2 2
// 3 3 3

const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += i + 1;
    }
    console.log(row);
  }
};

pattern(5);

//Given an integer N, print the following pattern :
// Input Format: N = 3
// Result:
// * * *
// * *
// *

const reverseTrianglePattern = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      //reduce the loop of j by n-i
      row += "* ";
    }
    console.log(row);
  }
};

reverseTrianglePattern(5);

// Given an integer N, print the following pattern :
// Input Format: N = 3
// Result:
// 1 2 3
// 1 2
// 1
const reverseNumTriangle = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += j + 1;
    }
    console.log(row);
  }
};

reverseNumTriangle(5);

const pyramidStart = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      row += "*";
    }

    for (let j = 0; j < n - i - 1; j++) {
      row += " ";
    }
    console.log(row);
  }
};

pyramidStart(6);
