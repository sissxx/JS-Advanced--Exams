const expect = require('chai').expect;
const companyAdministration = require('./companyAdministration');

describe('companyAdministration Testing Functionality', () => {
    describe('hiringEmployee', () => {

        it('Input Position with yearsExperience >= 3 ', () => {
            expect(companyAdministration.hiringEmployee('Siss', 'Programmer', 3)).to.equal('Siss was successfully hired for the position Programmer.');
        });
        it('Input Position with yearsExperience < 3 ', () => {
            expect(companyAdministration.hiringEmployee('Siss', 'Programmer', 2)).to.equal('Siss is not approved for this position.');
        });

        //Error
        it('Input Position with another position ', () => {
            expect(() => companyAdministration.hiringEmployee('Siss', 'Casino', 2)).to.throw('We are not looking for workers for this position.');
        });
    });
    describe('calculateSalary', () => {
        it('Input Hours - Invalid input - negative Number', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });
        it('Input Hours - Invalid input - string', () => {
            expect(() => companyAdministration.calculateSalary('Hi')).to.throw('Invalid hours');
        });
        it('Input Hours - hours > 160 - valid', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
        it('Input Hours - hours < 160 - valid', () => {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
    });
    describe('firedEmployee', () => {
        it('Testing the input - employees - string - index - string - throw Error', () => {
            expect(() => companyAdministration.firedEmployee(['Siss', 'Hello'])).to.throw('Invalid input');
        });
        it('Testing the input - employees - number - index - string - throw Error', () => {
            expect(() => companyAdministration.firedEmployee([1, 'Hello'])).to.throw('Invalid input');
        });
        it('Testing the input - employees - string - index - number - throw Error', () => {
            expect(() => companyAdministration.firedEmployee(['Hello', 1])).to.throw('Invalid input');
        });
        it('Testing the input - employees - array - index - string - throw Error', () => {
            expect(() => companyAdministration.firedEmployee(['Pesho'], 'Pesho')).to.throw('Invalid input');
        });
        it('Testing the input - employees - string - index - array - throw Error', () => {
            expect(() => companyAdministration.firedEmployee('Pesho', ['Pesho'])).to.throw('Invalid input');
        });
        it('Testing the input - valid employees  - index - negative number - throw Error', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw('Invalid input');
        });
        it('Testing the input - valid employees  - index - decimal number - throw Error', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2.2)).to.throw('Invalid input');
        });
        it('Testing the input - valid employees  - index - positive number - throw Error', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw('Invalid input');
        });


        // Valid
        it("without the index person", () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0)).to.equal('Ivan, George');
        });
        it("without the index person", () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)).to.equal('Petar, Ivan');
        });

    });
});