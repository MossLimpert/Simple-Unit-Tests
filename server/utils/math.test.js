const mathUtils = require('./math.js');

const testVars = {
    MIN: 0,
    MAX: 20,
}

// for add function
describe('add()', () => {
    test('finds sum of two numbers', () => {
        // expect or assert
        // tobe is a matcher
        expect(mathUtils.add(1, 2)).toBe(3);
    });
    
    test('clamps number to maximum', () => {
        expect(mathUtils.add(testVars.MAX, 1)).toBe(testVars.MAX);
    });

    test('clamps number to minimum', () => {
        expect(mathUtils.add(testVars.MIN, -1)).toBe(testVars.MIN);
    });
});

// for subtract function
describe('sub()', () => {

    test('finds difference of two numbers', () => {
        expect(mathUtils.sub(7, 3)).toBe(4);
    });

    test('clamps number to maximum', () => {
        expect(mathUtils.sub(100, 1)).toBe(testVars.MAX);
    });

    test('clamps number to minimum', () => {
        expect(mathUtils.sub(testVars.MIN, 1)).toBe(testVars.MIN);
    });

});

// for multiply function
describe('multiply()', () => {
    
        test('finds product of two numbers', () => {
            expect(mathUtils.mul(7, 3)).toBe(21);
        });
    
        test('clamps number to maximum', () => {
            expect(mathUtils.mul(testVars.MAX + 1, 2)).toBe(testVars.MAX * 2);
        });
    
        test('clamps number to minimum', () => {
            expect(mathUtils.mul(testVars.MIN - 1, 2)).toBe(testVars.MIN * 2);
        });
    
});
