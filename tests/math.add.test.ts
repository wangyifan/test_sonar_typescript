import { add, subtract } from '../src/math/math';

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