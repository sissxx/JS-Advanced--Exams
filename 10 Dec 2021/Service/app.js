window.addEventListener('load', solve);

function solve() {
    const productType = document.getElementById('type-product');
    const descriptionInput = document.getElementById('description');
    const clientNameInput = document.getElementById('client-name');
    const clientNumber = document.getElementById('client-phone');

    const sendBtn = document.querySelectorAll('button')[0];
    const clearBtn = document.querySelectorAll('button')[1];

    const receivedOrders = document.getElementById('received-orders');
    const completeOrder = document.getElementById('completed-orders');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!productType.value || !descriptionInput.value || !clientNameInput.value || !clientNumber.value) {
            return;
        };

        let divContainer = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let startBtn = document.createElement('button');
        let finishBtn = document.createElement('button');

        divContainer.className = 'container';
        startBtn.className = 'start-btn';
        finishBtn.className = 'finish-btn';
        finishBtn.disabled = true;

        if (productType.value === 'Computer') {
            h2.textContent = `Product type for repair: ${productType.value}`;
        } else if (productType.value === 'Phone') {
            h2.textContent = `Product type for repair: ${productType.value}`;
        }

        h3.textContent = `Client information: ${clientNameInput.value}, ${clientNumber.value}`;
        h4.textContent = `Description of the problem: ${descriptionInput.value}`;

        startBtn.textContent = 'Start repair';
        finishBtn.textContent = 'Finish repair';

        clientNameInput.value = '';
        clientNumber.value = '';
        descriptionInput.value = '';

        divContainer.appendChild(h2);
        divContainer.appendChild(h3);
        divContainer.appendChild(h4);
        divContainer.appendChild(startBtn);
        divContainer.appendChild(finishBtn);

        receivedOrders.appendChild(divContainer);

        startBtn.addEventListener('click', (e) => {
            e.preventDefault();
            startBtn.disabled = true;
            finishBtn.disabled = false;
        });

        finishBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let targetEl = e.target.parentElement;
            startBtn.remove();
            finishBtn.remove();
            completeOrder.appendChild(targetEl);


        });
        clearBtn.addEventListener('click', (e) => {
            divContainer.remove();
        })


    })


}