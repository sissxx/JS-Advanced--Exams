const expect = require('chai').expect;
const library = require('./library');

describe("Tests library functionality", () => {

    describe("calcPriceOfBook testing", () => {
        //calcPriceOfBook input return 'Invalid input'
        it('Invalid input - name of the book', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input')
        });
        it('Invalid input - year', () => {
            expect(() => library.calcPriceOfBook('h', 'h')).to.throw('Invalid input')
        });
        it('Valid data and yeat is below 1980', () => {
            expect(library.calcPriceOfBook('Hallow', 1943)).to.equal(`Price of Hallow is 10.00`);
        });
        it('Valid data and yeat is eaqual to 1980', () => {
            expect(library.calcPriceOfBook('Hallow', 1980)).to.equal(`Price of Hallow is 10.00`);
        });
        it('Valid data and yeat is greater than 1980', () => {
            expect(library.calcPriceOfBook('Hallow', 1990)).to.equal(`Price of Hallow is 20.00`);
        });

    });
    describe("findBook testing", () => {
        //findBook input return 'Invalid input'
        it('Invalid input - empty array', () => {
            expect(() => library.findBook([], 'Hallow')).to.throw('No books currently available')
        });
        it('valid input - availabel book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto", 'Hallow'], "Troy")).to.equal('We found the book you want.')
        });
        it('Valid input - not available book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto", 'Hallow'], "JS")).to.equal('The book you are looking for is not here!')

        });

    });
    describe("arrangeTheBooks testing", () => {
        //arrangeTheBooks input return 'Invalid input'
        it('Invalid input - string', () => {
            expect(() => library.arrangeTheBooks('test')).to.throw('Invalid input')
        });
        it('Invalid input - negative number', () => {
            expect(() => library.arrangeTheBooks(-10)).to.throw('Invalid input')
        });
        it('valid input - less than available space(39)', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.')
        });
        it('valid input - eaqual available space(40)', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        });
        it('valid input - greater than available space(41)', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.')
        });


    });


});