for (let i = 1; i <= 100; i++) {
  let fizz = !(i % 3), buzz = !(i % 5);
  let fizzbuzz = fizz && buzz;

  console.log(fizzbuzz ? 'fizzbuzz' :
    fizz ? 'fizz' :
    buzz ? 'buzz' : i
  );
}
