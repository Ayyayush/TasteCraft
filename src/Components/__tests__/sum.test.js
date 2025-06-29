test("sum fubnction should calculate the sum of two numbers", () => {
    const { sum } = require('../sum');
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-5, -5)).toBe(-10);
});