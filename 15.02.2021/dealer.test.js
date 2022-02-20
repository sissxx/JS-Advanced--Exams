const dealership = require('./dealer');
const expect = require('chai').expect;

describe('dealership Testing', () => {
    describe('newCarCost', () => {
        it('', () => {

            it('Should return second arg even if not a number', () => {
                expect(dealership.newCarCost('Mercedes', '')).to.be.equal('');
                expect(dealership.newCarCost('Mercedes', {})).to.be.eql({});
                expect(dealership.newCarCost('Mercedes', [])).to.be.eql([]);
                expect(dealership.newCarCost('Mercedes', null)).to.be.equal(null);
                expect(dealership.newCarCost('Mercedes', undefined)).to.be.equal(undefined);
            });


            it('oldCar from object  with newPrice 1000', () => {
                expect(dealership.newCarCost('Audi A4 B8', 1000)).to.equal(-14000);
            });
            it('oldCar from object  with newPrice 1000', () => {
                expect(dealership.newCarCost('Audi TT 8J', 20000)).to.equal(6000);
            });

            it('oldCar BMW  with newPrice 1000', () => {
                expect(dealership.newCarCost('BMW', 1000)).to.equal(1000);
            });
        });
    });
    describe('carEquipment', () => {

        it('Should return correct answer with valid inputs', () => {
            expect(dealership.carEquipment(['rims', 'seats', 'roof', 'doors', 'stereo'], [2, 3])).to.be.eql(['roof', 'doors']);
        });

        it('Should return correct answer with invalid first input', () => {
            expect(dealership.carEquipment([], [2, 3])).to.be.eql([undefined, undefined]);
        });
    });
    describe('euroCategory', () => {
        it('Category input should be bigger or equal to  4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
        it('Category input should be bigger or equal to  4', () => {
            expect(dealership.euroCategory(10)).to.equal('We have added 5% discount to the final price: 14250.');
        });

        it('Category input should be lower from 4', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});