const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const search = (val, arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);

    if (arr[i] == val) {
      return i;
    }
  }
  return -1;
};

const binarySearch = (val, arr) => {
  let upper = arr.length - 1;
  let lower = 0;
  while (lower <= upper) {
    const middle = lower + Math.floor((upper - lower) / 2);
    console.log(middle);
    if (arr[middle] == val) {
      return middle;
    }
    if (val < arr[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
};

console.log(binarySearch(10, array));
