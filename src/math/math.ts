export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

export function square(a: number): number {
  return a * a;
}

export function squareRoot(a: number): number {
  if (a < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(a);
}

export function fib(n: number): number {
  if (n < 0) throw new Error('Input must be a non-negative integer');
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export function log(a: number): number {
  if (a <= 0) throw new Error('Cannot take logarithm of non-positive number');
  return Math.log(a);
}

