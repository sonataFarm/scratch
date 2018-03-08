function countBs(str) {
  return (str.match(/B/g) || []).length;
}

function countChar(str, char) {
  regExp = new RegExp(char, 'g');
  return (str.match(regExp) || []).length;
}
