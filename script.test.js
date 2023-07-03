import { checkCalculation, changeSign, randNumb } from './modules/math.js';


test('solution 1 + 2 = 3 to equal "true"', () => {
    expect(checkCalculation("1", "2", "+", "3")).toBe(true);
});

test('solution 1 + 2 = 4 to equal "false"', () => {
    expect(checkCalculation("1", "2", "+", "4")).toBe(false);
});

test('solution 2 - 1 = 1 to equal "true"', () => {
    expect(checkCalculation("2", "1", "-", "1")).toBe(true);
});

test('solution 2 - 1 = 3 to equal "true"', () => {
    expect(checkCalculation("2", "1", "-", "3")).toBe(false);
});

test('randNumber must be integer ', () => {
    const num = randNumb();
    const result = num === Math.floor(num)
    expect(result).toBe(true);
})

test('randNumber must be grater than or equal 1', () => {
    // const num = randNumb();
    // const result = num >= 1;
    // expect(result).toBe(true);
    expect(randNumb()).toBeGreaterThanOrEqual(1);
})

test('randNumber must be less than or equal 100', () => {
    // const num = randNumb();
    // const result = num >= 1;
    // expect(result).toBe(true);
    expect(randNumb()).toBeLessThanOrEqual(100);
})

test('sign must be + when sn is greater than fn', () => {
    expect(changeSign(2, 3)).toBe("+");
})

test('sign must be - when fn is greater than sn', () => {
    expect(changeSign(3, 2)).toBe("-");
})
