import { add, divide, multiply, subtract } from '../src/math/math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds negative and positive number', () => {
    expect(add(-2, 3)).toBe(1);
  });

  it('adds two negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('adds zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });
});

describe('subtract', () => {
  it('subtracts two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('subtracts negative and positive number', () => {
    expect(subtract(-2, 3)).toBe(-5);
  });

  it('subtracts two negative numbers', () => {
    expect(subtract(-2, -3)).toBe(1);
  });

  it('subtracts zero', () => {
    expect(subtract(0, 5)).toBe(-5);
    expect(subtract(5, 0)).toBe(5);
  });
});

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  it('multiplies negative and positive number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('multiplies two negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  it('multiplies by zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two positive numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  it('divides negative and positive number', () => {
    expect(divide(-6, 3)).toBe(-2);
  });

  it('divides two negative numbers', () => {
    expect(divide(-6, -3)).toBe(2);
  });

  it('divides by one', () => {
    expect(divide(5, 1)).toBe(5);
  });

  it('throws on division by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });
});