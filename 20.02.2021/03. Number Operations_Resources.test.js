const numberOperations = require('./03. Number Operations_Resources');
const expect = require('chai').expect;


describe('numberOperations Functionality Testing', () => {

    describe('powNumber  Testing', () => {
        it('Input  with positive integer number', () => {
            expect(numberOperations.powNumber(5)).to.equal(25);
        });
        it('Negative input and integer number', () => {
            expect(numberOperations.powNumber(-5)).to.equal(25);
        });
        it('Positive number input and decimal', () => {
            expect(numberOperations.powNumber(1.5)).to.equal(2.25);
        });
        it('Negative input and decimal', () => {
            expect(numberOperations.powNumber(-1.5)).to.equal(2.25);
        });
        it('Input  0', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
    });
    describe('numberChecker  Testing', () => {
        it('Invalid inputs with  string', () => {
            expect(() => numberOperations.numberChecker('string')).to.throw('The input is not a number!');
        });
        it('Invalid inputs with  array', () => {
            expect(() => numberOperations.numberChecker(['hi'])).to.throw('The input is not a number!');
        });
        it('Invalid inputs with  object', () => {
            expect(() => numberOperations.numberChecker({})).to.throw('The input is not a number!');
        });
        // Throw Error if the input is lower  than 100
        it('Check if the input is lower than 100 and throw Error', () => {
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        });
        it('Check if the input is lower than 100 and throw Error', () => {
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
        });
        it('Check if the input is lower than 100 and throw Error', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });
        //Valid - greater than 100
        it('Check if the input is greater than 100 ', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
        it('Check if the input is greater than 100 ', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });


    });
    describe('sumArrays  Testing', () => {
        it('should returns new array, which represents the sum of the two arrays by indexes', () => {
            expect(numberOperations.sumArrays([1, 2, 3, 4, 5], [2, 4, 8, 10])).to.deep.equal([3, 6, 11, 14, 5])
        })
    });
});