"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../src/math");
describe('add', () => {
    it('adds two positive numbers', () => {
        expect((0, math_1.add)(2, 3)).toBe(5);
    });
    it('adds negative and positive number', () => {
        expect((0, math_1.add)(-2, 3)).toBe(1);
    });
    it('adds two negative numbers', () => {
        expect((0, math_1.add)(-2, -3)).toBe(-5);
    });
    it('adds zero', () => {
        expect((0, math_1.add)(0, 5)).toBe(5);
        expect((0, math_1.add)(5, 0)).toBe(5);
    });
});
