function deepEqual(el1, el2) {
  if (el1 === null || el2 === null) return el1 === el2;

  if (typeof el1 === 'object' && typeof el2 === 'object') {
    if (object.keys(el1).length !== object.keys(el2).length) {
      return false;
    }
    for (let property in el1) {
      if (!deepEqual(el1[property], el2[property])) return false;
    }
    return true;
  }

  return el1 === el2;
}
