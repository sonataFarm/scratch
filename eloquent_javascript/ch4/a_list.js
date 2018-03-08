function arrayToList(arr) {
  // list is
  // { value: arbitrary,
  //   rest: list or null
  // }
  if (arr.length === 0) return null;

  return {
    value: arr[0],
    rest: arrayToList(arr.slice(1))
  };
}

function prepend(el, list) {
  return {
    value: el,
    rest: list
  };
}

function nthInList(list, pos) {
  if (pos === 0) return list.value;
  if (list.rest === null) return undefined;

  return nthInList(list.rest, pos - 1);
}
