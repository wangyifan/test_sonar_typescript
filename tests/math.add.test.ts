import { add } from '../src/math';

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