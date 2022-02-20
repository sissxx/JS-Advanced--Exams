class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = Number(budgetMoney);

        this.menu = {};
        this.stockProducts = {};
        this.history = [];

    }

    loadProducts(products) {

        for (let product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (this.budgetMoney >= productTotalPrice) {
                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = productQuantity;
                    this.budgetMoney -= productTotalPrice;
                } else {
                    this.stockProducts[productName] += productQuantity;
                    this.budgetMoney -= productTotalPrice;
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        };
        return this.history.join('\n')
    };

    addToMenu(meal, neededProducts, price) {
        price = Number(price);
        let counterMenu = 0;

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal].products = [];
            this.menu[meal].price = price;
            counterMenu++;
            neededProducts.forEach(x => {
                let [product, quantity] = x.split(' ');
                quantity = Number(quantity)
                this.menu[meal].products.push({
                    name: product,
                    quantity: quantity
                })
            })
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        let menuLength = Object.keys(this.menu).length;

        if (menuLength === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        } else {
            return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`
        }
    }


    showTheMenu() {
        let menuLength = Object.keys(this.menu).length;
        let showMenuResult = [];

        if (menuLength === 0) {
            return `Our menu is not ready yet, please come later...`
        } else {
            Object.entries(this.menu).forEach(x => {
                showMenuResult.push(`${x[0]} - $ ${x[1].price}`)
            })
        }

        return showMenuResult.join('\n');
    };
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let neededProducts = this.menu[meal].products;
            let canBeCooked = true;
            for (let product of neededProducts) {
                if (this.stockProducts[product.name] === undefined) {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                } else {
                    if (this.stockProducts[product.name] < product.quantity) {
                        canBeCooked = false;
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                    } else {
                        this.stockProducts[product.name] -= product.quantity
                    }
                }
            }

            if (canBeCooked) {
                this.budgetMoney += this.menu[meal].price
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            }
        }
    }
}
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());