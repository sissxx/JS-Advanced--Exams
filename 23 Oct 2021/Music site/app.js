window.addEventListener('load', solve);

function solve() {

    const genreInput = document.getElementById('genre');
    const nameInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const allHitsDiv = document.querySelector('.all-hits-container');

    const addButton = document.getElementById('add-btn');
    let totalLikes = document.querySelector('.likes', 'p');
    let likesCounter = 0;

    const savedSongs = document.querySelector('.saved-container');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let genre = genreInput.value;
        let name = nameInput.value;
        let author = authorInput.value;
        let date = dateInput.value;

        if (!genre || !name || !author || !date) {
            return;
        };

        // createElements for .all-hits-container
        let divElement = document.createElement('div'); // add class hits-info
        let img = document.createElement('img');
        let genreH2 = document.createElement('h2');
        let nameH2 = document.createElement('h2');
        let authorH2 = document.createElement('h2');
        let dateH3 = document.createElement('h3');
        let saveBtn = document.createElement('button'); // add class save-btn
        let likeBtn = document.createElement('button'); // add class like-btn
        let deleteBtn = document.createElement('button'); // add class delete-btn

        genreH2.textContent = `Genre: ${genre}`;
        nameH2.textContent = `Name: ${name}`;
        authorH2.textContent = `Author: ${author}`;
        dateH3.textContent = `Date: ${date}`;

        genreInput.value = '';
        nameInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        saveBtn.textContent = 'Save song';
        likeBtn.textContent = 'Like song';
        deleteBtn.textContent = 'Delete';

        //Like button event
        likeBtn.addEventListener('click', (e) => {
            likesCounter++;
            totalLikes.innerHTML = `<p>Total Likes: ${likesCounter}</p><img src="./static/img/like-btn.jpg" alt="image-like"></img>`;
            e.target.setAttribute('disabled', true);

        });

        //Save button event
        saveBtn.addEventListener('click', (e) => {
            saveBtn.remove();
            likeBtn.remove();
            savedSongs.appendChild(divElement);
        });

        // Delete button
        deleteBtn.addEventListener('click', (e) => {
            divElement.remove();
        });

        //add class
        divElement.classList.add('hits-info');
        // img.src = './static/img/img.png';
        img.setAttribute(`src`, `./static/img/img.png`);
        saveBtn.classList.add('save-btn');
        likeBtn.classList.add('like-btn');
        deleteBtn.classList.add('delete-btn');


        //append
        divElement.appendChild(img);
        divElement.appendChild(genreH2);
        divElement.appendChild(nameH2);
        divElement.appendChild(authorH2);
        divElement.appendChild(dateH3);
        divElement.appendChild(saveBtn);
        divElement.appendChild(likeBtn);
        divElement.appendChild(deleteBtn);

        allHitsDiv.appendChild(divElement);

    })


}