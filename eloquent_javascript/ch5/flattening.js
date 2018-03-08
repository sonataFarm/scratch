// use 'reduce' with 'concat' to 'flatten' an array of arrays.
function flatten(arr) {
  return arr.reduce((acc, el) => {
    if (el.constructor === Array) return acc.concat(flatten(el));
    else return acc.concat(el);
  }, [])
}
