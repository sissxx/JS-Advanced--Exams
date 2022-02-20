function solution() {

    const addGiftInput = document.querySelector('input[placeholder="Gift name"]');
    const addButton = document.querySelector('.card button');

    let [listofGift, sentGifts, listOfDiscarded] = document.querySelectorAll('ul');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let gift = addGiftInput.value;

        // created elements
        let giftList = document.createElement('li');
        giftList.textContent = gift;
        giftList.className = 'gift';

        let sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.className = 'sendButton';

        sendBtn.addEventListener('click', (e) => {
            let currLi = e.currentTarget.parentElement;
            currLi.children[1].remove();
            currLi.children[0].remove();
            sentGifts.appendChild(currLi);

        });

        let discardBtn = document.createElement('button');
        discardBtn.textContent = 'Discard';
        discardBtn.className = 'discardButton';


        discardBtn.addEventListener('click', (e) => {
            let currLi = e.currentTarget.parentElement;
            currLi.children[1].remove();
            currLi.children[0].remove();
            listOfDiscarded.appendChild(currLi);
        });

        giftList.appendChild(sendBtn);
        giftList.appendChild(discardBtn);

        listofGift.appendChild(giftList);

        Array.from(listofGift.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => listofGift.appendChild(li));
        addGiftInput.value = '';
    })

}