//Count the number of digits in the number

function countDigits(n) {
  let x = n;
  let count = 0;
  while (x !== 0) {
    x = Math.floor(x / 10);
    count++;
  }
  return count;
}

console.log(countDigits(45788856));
