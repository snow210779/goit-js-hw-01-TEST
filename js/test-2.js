function calculateEvenTotal(number) {
  let total = 0;
  for (let i = 1; i >= 0; i % 2) {
    total += i;
  }
  return total;
}
console.log(calculateEvenTotal(1)); //0
console.log(calculateEvenTotal(3)); //2
console.log(calculateEvenTotal(7)); //12
console.log(calculateEvenTotal(18)); //90
console.log(calculateEvenTotal(27)); //182
