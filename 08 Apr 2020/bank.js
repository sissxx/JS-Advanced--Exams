class Bank {

    constructor(bankName) {
        this._bankName = bankName; //private property
        this.allCustomers = [];
    };

    newCustomer(customer) {

        let firstName = customer.firstName; // взимаме имената от подадения обект customer
        let lastName = customer.lastName;
        let personalId = customer.personalId;

        if (this.allCustomers.some(p => p.personalId === personalId)) { // проверка дали го има  в масива с всички клиенти
            throw new Error(`${firstName} ${lastName} is already our customer!`) // и връща че го има
        }

        let newCustomer = { // създаваме нов обект за нови клиенти
            firstName,
            lastName,
            personalId,
            transactions: [],
        }
        this.allCustomers // добавяме всеки клиент към масива
            .push(newCustomer);


        return newCustomer;

    };

    depositMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let personToDeposit = this.allCustomers.find(p => p.personalId === personalId);
        // personToDeposit дава цялата информация от масива с клиенти на избрания клиент
        // връща true/false
        if (!personToDeposit) {
            throw Error("We have no customer with this ID!"); // ако няма такъв клиент
        };


        if (!personToDeposit.totalMoney) { // проверяваме дали няма пари
            personToDeposit.totalMoney = 0; // присвояваме ги към 0
        }
        personToDeposit.totalMoney += amount; // ако го има добавяме сумата

        personToDeposit.transactions.push(`${personToDeposit.firstName} ${personToDeposit.lastName} made deposit of ${amount}$!`);
        // към transactions добавяме информацията имената и сумата
        return `${personToDeposit.totalMoney}$`

    };

    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let personToDeposit = this.allCustomers.find(p => p.personalId === personalId);
        if (!personToDeposit) {
            throw Error("We have no customer with this ID!");
        };

        let enoughtMoney = personToDeposit.totalMoney; // enoughtMoney е равна на  сумата която има до момента

        if (enoughtMoney < amount) { // проверка дали има достатъчно
            throw Error(`${personToDeposit.firstName} ${personToDeposit.lastName} does not have enough money to withdraw that amount!`)
        };
        personToDeposit.totalMoney -= amount; // ако има ги намаля
        personToDeposit.transactions.push(`${personToDeposit.firstName} ${personToDeposit.lastName} withdrew ${amount}$!`);
        // и отново към transactions прибавяме информацията на клиента и сумата, която е останала/има
        return `${personToDeposit.totalMoney}$`;

    };
    customerInfo(personalId) {
        let personToDeposit = this.allCustomers.find(p => p.personalId === personalId);
        // намираме определения клиент
        if (!personToDeposit) { // връща грешка ако го няма
            throw new Error('We have no customer with this ID!')
        }
        let result = []; // масив  - придостъпваме информацията
        result.push(`Bank name: ${this._bankName}`); // към масива добавяме името на банката 
        result.push(`Customer name: ${personToDeposit.firstName} ${personToDeposit.lastName}`); // имената на клиента
        result.push(`Customer ID: ${personToDeposit.personalId}`) //   ID
        result.push(`Total Money: ${personToDeposit.totalMoney}$`) // сумата, която има до момента
        result.push('Transactions:');

        for (let i = personToDeposit.transactions.length - 1; i >= 0; i--) {
            // добавяме всяка една транзакция от масива transactions
            // катоо намаляме дължинатаз
            result.push(`${i+1}. ${personToDeposit.transactions[i]}`);
        }
        return result.join('\n');
    }

}
let bank = new Bank('SoftUni Bank');

bank.newCustomer({
    firstName: 'Svetlin',
    lastName: 'Nakov',
    personalId: 6233267
});
bank.newCustomer({
    firstName: 'Mihaela',
    lastName: 'Mileva',
    personalId: 4151596
});

bank.depositMoney(6233267, 250);
bank.depositMoney(6233267, 250);
bank.depositMoney(4151596, 555);
bank.withdrawMoney(6233267, 125);

console.log(bank.customerInfo(6233267));