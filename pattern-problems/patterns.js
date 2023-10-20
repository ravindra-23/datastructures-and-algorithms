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

// 1
// 01
// 101
// 0101
// 10101

const pattern11 = (n) => {
  for (let row = 0; row < n; row++) {
    let num = "";
    for (let col = 0; col < row + 1; col++) {
      if ((row + col) % 2 == 0) {
        num += 1;
      } else {
        num += 0;
      }
    }
    console.log(num);
  }
};

pattern11(5);

// 1        1
// 12      21
// 12     321
// 1234  4321
// 1234554321

const pattern12 = (n) => {
  for (let row = 0; row < n; row++) {
    let num = "";
    for (let col = 0; col < row; col++) {
      num += col + 1;
    }
    for (let col = 0; col < 2 * (n - row - 1); col++) {
      num += " ";
    }
    for (let col = 0; col < row; col++) {
      num += row - col;
    }
    console.log(num);
  }
};

pattern12(5);

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11 12 13 14  15

const pattern13 = (n) => {
  let num = 1;
  for (let row = 0; row < n; row++) {
    let s = "";
    for (let col = 0; col < row; col++) {
      s += num + " ";
      num++;
    }
    console.log(num);
  }
};

pattern13(5);

const pattern14 = (n) => {
  for (let row = 1; row <= n; row++) {
    let star = "";
    for (let col = 1; col <= n; col++) {
      if (row == 1 || col == 1 || row == n || col == n) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
};

pattern14(5);

const pattern15 = (n) => {
  for (let row = 0; row < n; row++) {
    let char = "";
    for (let col = "A"; col <= "A" + row; col++) {
      char += col;
    }
    console.log(char);
  }
};

pattern15(5);

const pattern16 = (n) => {
  for (let row = 1; row <= n; row++) {
    let star = "";
    for (let col = 0; col <= n; col++) {
      star += "*";
    }
    for (let col = 0; col <= 2 * (n - row); col++) {
      star += " ";
    }
    for (let col = 0; col <= n; col++) {
      star += "*";
    }
    console.log(star);
  }
};

pattern16(5);
