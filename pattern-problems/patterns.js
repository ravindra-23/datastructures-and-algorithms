// *****
// *****
// *****
// *****
// *****

const pattern1 = (n) => {
  for (let row = 1; row <= n; row++) {
    let star = "";
    for (let col = 1; col <= n; col++) {
      star += "* ";
    }
    console.log(star);
  }
};

pattern1(5);

// *
// **
// ***
// ****
// *****

const pattern2 = (n) => {
  for (let row = 1; row <= n; row++) {
    let star = "";
    for (let col = 1; col <= row; col++) {
      star += "* ";
    }
    console.log(star);
  }
};

pattern2(5);

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const pattern3 = (n) => {
  for (let row = 1; row <= n; row++) {
    let num = "";
    for (let col = 1; col <= row; col++) {
      num += col;
    }
    console.log(num);
  }
};

pattern3(5);

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

const pattern4 = (n) => {
  for (let row = 1; row <= n; row++) {
    let num = "";
    for (let col = 1; col <= row; col++) {
      num += row;
    }
    console.log(num);
  }
};

pattern4(5);

// *****
// ****
// ***
// **
// *

const pattern5 = (n) => {
  for (let row = 1; row <= n; row++) {
    let star = "";
    for (let col = 1; col <= n + 1 - row; col++) {
      star += "* ";
    }
    console.log(star);
  }
};

pattern5(5);

// 12345
// 1234
// 123
// 12
// 1

const pattern6 = (n) => {
  for (let row = 1; row <= n; row++) {
    let num = "";
    for (let col = 1; col <= n + 1 - row; col++) {
      num += col;
    }
    console.log(num);
  }
};

pattern6(5);

//      *
//     ***
//    *****
//   *******
//  *********

const pattern7 = (n) => {
  for (let row = 0; row < n; row++) {
    let star = "";
    for (let sp = 0; sp < n - row - 1; sp++) {
      star += " ";
    }
    for (let s = 0; s < 2 * row + 1; s++) {
      star += "*";
    }
    for (let sp = 0; sp < n - row - 1; sp++) {
      star += " ";
    }
    console.log(star);
  }
};

pattern7(5);

//  *********
//   *******
//    *****
//     ***
//      *

const pattern8 = (n) => {
  for (let row = 0; row < n; row++) {
    let star = "";
    for (let sp = 0; sp < (2 * row) / 2; sp++) {
      star += " ";
    }
    for (let s = 0; s < 2 * (n - 1 - row) + 1; s++) {
      star += "*";
    }
    for (let sp = 0; sp < (2 * row) / 2; sp++) {
      star += " ";
    }
    console.log(star);
  }
};

pattern8(5);

//   *
//  ***
// *****
// *****
//  ***
//   *

const pattern9 = (n) => {
  pattern7(n);
  pattern8(n);
};

pattern9(5);

const pattern10 = (n) => {
  for (let row = 0; row < n * 2; row++) {
    let star = "";
    if (row < n) {
      for (let col = 0; col < row + 1; col++) {
        star += "*";
      }
    } else {
      for (let col = 0; col < 2 * n - row; col++) {
        star += "*";
      }
    }
    console.log(star);
  }
};

pattern10(5);
