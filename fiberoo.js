function fib() {
  const fibonacci = [0, 1];
  for (let i = 2; i < 50; i++) {
    const nextFib = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextFib);
  }
  return fibonacci;
}
console.log(fib());

function numsToStrings(arr) {
  return arr.map(number => `${number}`);
}

console.log(numsToStrings(fib()));

function numEvenNums(arr) {
  return arr.reduce((count, number) => (number % 2 === 0 ? count + 1 : count), 0);
}

console.log(numEvenNums(fib()));