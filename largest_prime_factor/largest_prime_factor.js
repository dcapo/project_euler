function largestPrimeFactor(n) {
    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            n /= i;
        } else {
            i++;
        }
    }
    return i;
}

console.log(largestPrimeFactor(600851475143));
