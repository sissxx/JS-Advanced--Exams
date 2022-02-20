const testNumbers = require('./testNumbers');
const expect = require('chai').expect;

describe('testNumbers Testing functionality', () => {
    describe('sumNumbers function', () => {
        // Invalid result
        it('Inputs should be numbers - type of input - string - undefined', () => {
            expect(testNumbers.sumNumbers('string', 'string')).to.be.undefined;
        });
        it('Inputs should be numbers - type of input -string and number - undefined', () => {
            expect(testNumbers.sumNumbers('string', 1)).to.be.undefined;
        });
        it('Inputs should be numbers - type of input -string and number - undefined', () => {
            expect(testNumbers.sumNumbers(1, 'string')).to.be.undefined;
        });
        it('Inputs should be numbers - type of input -arr and number - undefined', () => {
            expect(testNumbers.sumNumbers([], 1)).to.be.undefined;
        });
        it('Inputs should be numbers - type of input -number and object - undefined', () => {
            expect(testNumbers.sumNumbers(1, {})).to.be.undefined;
        });

        // Valid Inputs

        it('Should  return the sum of  two  numbers', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
        });
        it('Should  return the sum of  two  numbers - One negative', () => {
            expect(testNumbers.sumNumbers(100, -1)).to.equal('99.00');
        });
        it('Should  return the sum of  two  numbers - Negative numbers', () => {
            expect(testNumbers.sumNumbers(-5, -5)).to.equal('-10.00');
        });
        it('Should  return the sum of  two  numbers - Negative numbers', () => {
            expect(testNumbers.sumNumbers(1.5, 1.5)).to.equal('3.00');
        });
        it('Should  return the sum of  two  numbers - Negative numbers', () => {
            expect(testNumbers.sumNumbers(-1.5, 1.5)).to.equal('0.00');
        });
    });

    describe('numberChecker function', () => {
        it('Input should be Number - string test ', () => {

            expect(() => testNumbers.numberChecker('string')).to.throw('The input is not a number!');
        });
        it('Input should be Number - object test ', () => {

            expect(() => testNumbers.numberChecker({})).to.throw('The input is not a number!');
        });
        it('Input should be Number - array test ', () => {
            expect(() => testNumbers.numberChecker(['Hello'])).to.throw('The input is not a number!');
        });

        // even input
        it('Input should be Number -  Even Number', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });
        // odd input
        it('Input should be Number -  Even Number', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
    });
    describe('averageSumArray function', () => {
        //Valid  input
        it('Input should be array input', () => {
            expect(testNumbers.averageSumArray([1, 1, 1])).to.equal(1);
        });
        it('Input should be array input', () => {
            expect(testNumbers.averageSumArray([-5, 10])).to.equal(2.5);
        });
        it('Input should be array input', () => {
            expect(testNumbers.averageSumArray([-5, 10, 10, 15, 1, 5])).to.equal(6);
        });
        it('Input should be array input', () => {
            expect(testNumbers.averageSumArray([0])).to.equal(0);
        });
    });
});