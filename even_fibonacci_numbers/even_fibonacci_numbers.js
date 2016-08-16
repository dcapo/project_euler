function sumEvenFibonacciNumbersUnder(n) {
    let sum = 0,
        last = 0,
        current = 1;

    while (current < n) {
        if (current % 2 === 0) sum += current;
        let next = current + last;
        last = current;
        current = next;
    }

    return sum;
};

console.log(sumEvenFibonacciNumbersUnder(4000000));
// 4613732
