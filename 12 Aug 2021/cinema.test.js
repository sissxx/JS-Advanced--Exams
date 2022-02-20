const expect = require('chai').expect;
const cinema = require('./cinema');

describe("cinema testing functionality", () => {
    describe("showMovies test", () => {
        it('Check the length of array -invalid ', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it('Check the length of array - Valid', () => {
            expect(cinema.showMovies(["Hello"])).to.equal("Hello");
        });
        it('Check the length of array - Valid movies', () => {
            expect(cinema.showMovies(["Hello", "Lord"])).to.equal('Hello, Lord');
        });

    });
    describe("ticketPrice test", () => {

        it('should check if the current projection type IS present', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it('should check if the current projection type IS present', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);

        });
        it('should check if the current projection type IS present', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);

        });

        it('should check if the current projection type is NOT present', () => {
            expect(() => cinema.ticketPrice('ani')).to.throw('Invalid projection type.');
        });
    });
    describe("swapSeatsInHall test", () => {
        it("Invalid inputs - with strings", () => {
            expect(cinema.swapSeatsInHall('Hello', 'Hello')).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Invalid inputs - with negative Numbers", () => {
            expect(cinema.swapSeatsInHall(-1, -1)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("Invalid inputs - with negative Number and String", () => {
            expect(cinema.swapSeatsInHall(-1, 'Hello')).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Invalid inputs - with greater than 20  ", () => {
            expect(cinema.swapSeatsInHall(204, 240)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Invalid inputs - with eaqualNumbers  ", () => {
            expect(cinema.swapSeatsInHall(10, 10)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Invalid inputs - with eaqual numbers  ", () => {
            expect(cinema.swapSeatsInHall(50, 50)).to.equal("Unsuccessful change of seats in the hall.");
        });


        // ТЕЗИ ДВЕ ДАВАТ 100/100
        it("Invalid inputs - with eaqual numbers  ", () => {
            expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.");
        });
        it("Invalid inputs - with eaqual numbers  ", () => {
            expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });


        // "Successful change of seats in the hall."
        it("Valid inputs - ", () => {
            expect(cinema.swapSeatsInHall(1, 5)).to.equal("Successful change of seats in the hall.");
        });
        it("Valid inputs - ", () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        });



    });

});