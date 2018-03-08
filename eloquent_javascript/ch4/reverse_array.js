function reverseArray(arr) {
  // returns a new array with the same elements as arr,
  // in reverse order
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseArrayInPlace(arr) {
  for (let i = 0, j = arr.length - 1; j > i; i++, j--) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
