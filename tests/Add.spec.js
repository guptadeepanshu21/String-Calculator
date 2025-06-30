const {expect, test} = require('@jest/globals');
const {Add} =  require('../src/Add.js');

describe('Add', () => {
    test('Add method exists', () => {
        expect(typeof Add).toBe('function');    
    });
})