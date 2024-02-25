// 1
function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    } else {
      return base * power(base, exponent - 1);
    }
  }
  
  // Example usage:
  console.log(power(2, 3)); // Output: 8
  
  // 2
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  // Example usage:
  console.log(gcd(48, 18)); // Output: 6
  
  // 3
  function maxDigit(number) {
    if (number < 10) {
      return number;
    } else {
      const lastDigit = number % 10;
      const remainingDigits = Math.floor(number / 10);
      const maxInRemaining = maxDigit(remainingDigits);
      return Math.max(lastDigit, maxInRemaining);
    }
  }
  
  // Example usage:
  console.log(maxDigit(9261)); // Output: 9
  
  // 4
  function isPrime(number, divisor = 2) {
    if (number <= 2) {
      return number === 2;
    }
  
    if (number % divisor === 0) {
      return false;
    } else if (divisor * divisor > number) {
      return true;
    } else {
      return isPrime(number, divisor + 1);
    }
  }
  
  // Example usage:
  console.log(isPrime(13)); // Output: true
  
  // 5
  function factors(number, divisor = 2) {
    if (number < 2) {
      return [];
    }
  
    if (number % divisor === 0) {
      return [divisor, ...factors(number / divisor, divisor)];
    } else {
      return factors(number, divisor + 1);
    }
  }
  
  // Example usage:
  console.log(factors(18)); // Output: [2, 3, 3]
  
  // 6
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Example usage:
  console.log(fibonacci(6)); // Output: 8
  