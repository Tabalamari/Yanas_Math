import { checkCalculation } from './modules/math.js';

test('adds 1 + 2 = 3 to equal "true"', () => {
    expect(checkCalculation("1", "2", "+", "3")).toBe(true);
});

test('adds 1 + 2 = 4 to equal "false"', () => {
    expect(checkCalculation("1", "2", "+", "4")).toBe(false);
});

test('adds 2 - 1 = 1 to equal "true"', () => {
    expect(checkCalculation("2", "1", "-", "1")).toBe(true);
});

test('adds 2 - 1 = 3 to equal "true"', () => {
    expect(checkCalculation("2", "1", "-", "3")).toBe(false);
});