// # Write a method, `digital_root(num)`. It should Sum the digits of a positive
// # integer. If it is greater than 10, sum the digits of the resulting number.
// # Keep repeating until there is only one digit in the result, called the
// # "digital root". **Do not use string conversion within your method.**
// #
// # You may wish to use a helper function, `digital_root_step(num)` which performs
// # one step of the process.

function digitalRoot(num) {
  while (num > 10) {
    num = nextDigitalRoot(num);
  }
  return num;
}

function nextDigitalRoot(num) {
  if (num <= 10) {
    return num;
  } else {
    return num.digits().reduce((sum, num) => sum + num, 0);
  }
}

Number.prototype.digits = function() {
  const digits = []
  let digitized = this;

  while (digitized > 0) {
    let digit = digitized % 10;
    digits.unshift(digit);
    digitized = Math.floor(digitized / 10);
  }

  return digits;
}

// # return the sum of the first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n) {
  if (n === 0) return 0;

  return 2 * n + firstEvenNumbersSum(n - 1);
}

// class Array
//   # Write a method, `Array#two_sum`, that finds all pairs of positions where the
//   # elements at those positions sum to zero.
//
//   # NB: ordering matters. I want each of the pairs to be sorted smaller index
//   # before bigger index. I want the array of pairs to be sorted
//   # "dictionary-wise":
//   #   [0, 2] before [1, 2] (smaller first elements come first)
//   #   [0, 1] before [0, 2] (then smaller second elements come first)
//
//   def two_sum
//
//   end
// end

Array.prototype.twoSum = function() {
  // find all pairs of positions where the elements at those positions sum to zero.
  const pairs = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) pairs.push([i, j]);
    }
  }
  return pairs;
}

// # primes(num) returns an array of the first "num" primes.
// # You may wish to use an is_prime? helper method.

function primes(num) {
  const primes = [];

  for (let i = 0; i < num; i++) {
    primes.push(generateNextPrime(primes[primes.length - 1]));
  }

  return primes;
}

function generateNextPrime(prevPrime) {
  if (prevPrime < 2 || !prevPrime) return 2;

  let nextPrime = prevPrime;

  while (true) {
    if (isPrime(++nextPrime)) return nextPrime;
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (!(n % i)) return false;
  }
  return true;
}

// # Back in the good old days, you used to be able to write a darn near
// # uncrackable code by simply taking each letter of a message and incrementing it
// # by a fixed number, so "abc" by 2 would look like "cde", wrapping around back
// # to "a" when you pass "z".  Write a function, `caesar_cipher(str, shift)` which
// # will take a message and an increment amount and outputs the encoded message.
// # Assume lowercase and no punctuation. Preserve spaces.
// #
// # To get an array of letters "a" to "z", you may use `("a".."z").to_a`. To find
// # the position of a letter in the array, you may use `Array#find_index`.

function caesar_cipher(str, shift) {
  return str.split('').map(char => {
    if (char === '') return char;

    let base = 'a'.charCodeAt();
    return String.fromCharCode((char.charCodeAt() - base + shift) % 26 + base)
  }).join('');
}

// # Write a String#symmetric_substrings method that returns an array of substrings
// # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
// # Only include substrings of length > 1.

String.prototype.symmetric_substrings = function() {
  return this.substrings().filter(substr => (
    arraysAreEqual(substr.split(''), substr.split('').reverse()) &&
      substr.length > 1
  ));
};

String.prototype.substrings = function() {
  const substrings = [];

  for (i = 0; i < this.length; i++) {
    for (j = this.length; j > i; j--) {
      substrings.push(this.slice(i, j));
    }
  }

  return substrings;
}

function arraysAreEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every(
    (el, idx) => arr1[idx] === arr2[idx]
  );
}

Array.prototype.myFilter = function(callback) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    if (callback.call(null, el, i, this)) filtered.push(el);
  }

  return filtered;
}

Array.prototype.myReduce = function(callback, initialValue) {
  let i, accumulator;

  if (!initialValue) {
    accumulator = this[0];
    i = 1;
  } else {
    accumulator = initialValue;
    i = 0;
  }

  for ( ; i < this.length; i++) {
    let el = this[i];
    accumulator = callback.call(null, accumulator, el, i, this);
  }

  return accumulator;
}
