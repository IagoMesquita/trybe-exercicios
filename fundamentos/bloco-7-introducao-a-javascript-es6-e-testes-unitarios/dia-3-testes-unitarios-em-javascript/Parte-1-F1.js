const assert = require('assert');;

function sum(a, b){
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('parameters must be numbers')
    }
    return a + b;
}

const expected = sum(4, 5);

assert.strictEqual(typeof sum, 'function');
assert.strictEqual(expected, 9, "A soma de 4 + 5 deve ser 9");
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0, "A soma de zeros deve ser 0");
assert.throws(() => {
    sum(4, '5');
});
assert.throws(() => {
    sum(4, '5');
}, /^Error: parameters must be numbers$/)