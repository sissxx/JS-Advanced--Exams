class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};

        if (this.budget < 0) {
            throw Error("The budget cannot be a negative number");
        };

    };
    shopping(product) { // идва като масив

        let type = product[0];
        let price = product[1];
        price = Number(price);

        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        };

        this.products.push(type); // добавяме продукта към масива products
        this.budget -= price; // намаляме буджета
        return (`You have successfully bought ${type}!`);

    };
    recipes(recipe) { // идва като обект
        recipe.productsList.forEach(product => {
            let isPresent = this.products.some(x => product === x);
            // за всеки productsList от обекта recipe проверяваме дали го има
            // в масива products
            if (!isPresent) { //  продукта от обекта recipe го няма в масива products
                throw new Error('We do not have this product');
            }
        })

        this.dishes.push(recipe); // към масива добавяме рецептата
        return `${recipe.recipeName} has been successfully cooked!`; // достъп до key recipeName от обект recipe

    };
    inviteGuests(name, dish) {

        let isDish = this.dishes.some(x => x.recipeName === dish);
        // проверка дали в масива има ястието(dish) добавено от  обекта recipe.recipeName
        if (!isDish) {
            throw new Error('"We do not have this dish"');
        };

        if (this.guests[name]) { //  ако госта вече го има в списъка
            throw new Error('This guest has already been invited');
        };

        this.guests[name] = dish; // добавяме името на госта: ястието

        return `You have successfully invited ${name}!`

    };

    showAttendance() {
        // "{name} will eat {dish}, which consists of {products};

        let result = [];

        for (let guestsKey in this.guests) {
            let name = guestsKey;
            let dish = this.guests[guestsKey];
            let products = this.dishes.find(x => x.recipeName === dish).productsList;

            result.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`);
        }

        return result.join('\n');

    };


}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());