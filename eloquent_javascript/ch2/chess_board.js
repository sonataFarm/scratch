const ROWS = process.argv[2];

for (let i = 0; i < ROWS; i++) {
  let rowString = i % 2) ?
    rowTemplate.substr(0, rowTemplate.length - 1) :
    rowTemplate.substr(1);

  console.log(rowString);
}
