window.addEventListener('load', solve);

function solve() {

    // Inputs Element  
    const modelInputElement = document.getElementById('model')
    const yearInputElement = document.getElementById('year')
    const descriptionInputElement = document.getElementById('description')
    const priceInputElement = document.getElementById('price');
    const furnitesElementsInfo = document.getElementById('furniture-list');
    const addButton = document.getElementById('add');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelInputElement.value;
        let description = descriptionInputElement.value;
        let year = Number(yearInputElement.value);
        let price = Number(priceInputElement.value);

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        priceInputElement.value = '';

        if (!model || !description) {
            return;
        }

        if (year <= 0 || price <= 0) {
            return;
        }

        // table rows
        let rowElements = document.createElement('tr');
        let modelTdElement = document.createElement('td');
        let priceTdElement = document.createElement('td');
        let actionsElements = document.createElement('td');
        let buttonMore = document.createElement('button');
        let buttonBuy = document.createElement('button');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price');

        //textContent and setAtribute
        modelTdElement.textContent = model;
        priceTdElement.textContent = price.toFixed(2);

        buttonMore.textContent = 'More Info';
        buttonMore.classList.add('moreBtn');
        buttonMore.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        })

        buttonBuy.textContent = 'Buy it';
        buttonBuy.classList.add('buyBtn');
        buttonBuy.addEventListener('click', (e) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElements.remove();
            contentsRowElement.remove();
        });


        actionsElements.appendChild(buttonMore);
        actionsElements.appendChild(buttonBuy);

        rowElements.classList.add('info');

        rowElements.appendChild(modelTdElement);
        rowElements.appendChild(priceTdElement);
        rowElements.appendChild(actionsElements);

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitesElementsInfo.appendChild(rowElements);
        furnitesElementsInfo.appendChild(contentsRowElement);

    });

}