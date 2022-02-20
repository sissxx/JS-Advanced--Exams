window.addEventListener('load', solution);

function solution() {

    const fullNameInputElement = document.getElementById('fname');
    const emailInputElement = document.getElementById('email');
    const phoneInputElement = document.getElementById('phone');
    const adressInputElement = document.getElementById('address');
    const postCodeInputElement = document.getElementById('code');

    const submitBtn = document.getElementById('submitBTN');
    const editBtn = document.getElementById('editBTN');
    const continueBtn = document.getElementById('continueBTN');

    const previewInfo = document.getElementById('infoPreview');
    // const divElementBlock = document.getElementById('block');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let fullName = fullNameInputElement.value;
        let email = emailInputElement.value;
        let phoneNumber = phoneInputElement.value;
        let adress = adressInputElement.value;
        let postCode = postCodeInputElement.value;

        if (!fullName && !email) {
            return;
        };


        // create elements for preview  
        let nameLiElement = document.createElement('li');
        let emailLiElement = document.createElement('li');
        let phoneNumberLiElement = document.createElement('li');
        let adressLiElement = document.createElement('li');
        let postCodeLiElement = document.createElement('li');

        //append to infoPreview
        previewInfo.appendChild(nameLiElement);
        previewInfo.appendChild(emailLiElement);
        previewInfo.appendChild(phoneNumberLiElement);
        previewInfo.appendChild(adressLiElement);
        previewInfo.appendChild(postCodeLiElement);

        submitBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;

        fullNameInputElement.value = '';
        emailInputElement.value = '';
        phoneInputElement.value = '';
        adressInputElement.value = '';
        postCodeInputElement.value = '';

        nameLiElement.textContent = `Full Name: ${fullName}`;
        emailLiElement.textContent = `Email: ${email}`;
        phoneNumberLiElement.textContent = `Phone Number: ${phoneNumber}`;
        adressLiElement.textContent = `Address: ${adress}`;
        postCodeLiElement.textContent = `Postal Code: ${postCode}`;



        editBtn.addEventListener('click', (e) => {
            e.preventDefault();

            submitBtn.disabled = false;
            editBtn.disabled = true;
            continueBtn.disabled = true;

            fullNameInputElement.value = `${fullName}`;
            emailInputElement.value = `${email}`;
            phoneInputElement.value = `${phoneNumber}`;
            adressInputElement.value = `${adress}`;
            postCodeInputElement.value = `${postCode}`;

            previewInfo.innerHTML = "";

        });

        continueBtn.addEventListener('click', (e) => {

            document.querySelector('#block').innerHTML =
                "<h3>Thank you for your reservation!</h3>"

            // while (divElementBlock.children[0]) {
            //     divElementBlock.children[0].remove()
            // }

            editBtn.disabled = true;
            continueBtn.disabled = true;
            submitBtn.disabled = false;
        });


    });


}