function solve() {

    let taskInput = document.getElementById("task");
    let descriptionInput = document.getElementById("description");
    let dueDataInput = document.getElementById('date');

    let addButtonTask = document.getElementById('add');
    addButtonTask.addEventListener('click', onClick);

    let allSections = Array.from(document.querySelectorAll('section'));
    let openTask = allSections[1];
    let inProgress = allSections[2];
    let completeTask = allSections[3];

    function onClick(e) {
        e.preventDefault();

        if (taskInput.value && descriptionInput.value && dueDataInput.value) {

            let openDiv = openTask.querySelector('div:last-of-type');

            let articleOrange = document.createElement('article');
            let taskTitle = document.createElement('h3');
            let desctiprionsText = document.createElement('p');
            let dueDate = document.createElement('p');
            let divFlex = document.createElement('div');
            let redBtn = document.createElement('button');
            let greenBtn = document.createElement('button');

            taskTitle.textContent = taskInput.value;
            desctiprionsText.textContent = `Description: ${descriptionInput.value}`;
            dueDate.textContent = `Due Date: ${dueDataInput.value}`;
            divFlex.className = 'flex';
            redBtn.className = 'red';
            redBtn.textContent = 'Delete';
            greenBtn.className = 'green';
            greenBtn.textContent = 'Start';

            divFlex.appendChild(greenBtn);
            divFlex.appendChild(redBtn);

            articleOrange.appendChild(taskTitle);
            articleOrange.appendChild(desctiprionsText);
            articleOrange.appendChild(dueDate);
            articleOrange.appendChild(divFlex);

            openDiv.appendChild(articleOrange);
            // document.getElementsByClassName("orange")[0].parentElement.parentElement.children[1].appendChild(articleOrange);

            greenBtn.addEventListener('click', startButton);
            redBtn.addEventListener('click', deleteBtn);

            taskInput.value = '';
            descriptionInput.value = '';
            dueDataInput.value = '';

        };

    }

    function startButton(e) {
        e.preventDefault();

        let progressDiv = inProgress.querySelector('div:last-of-type');
        let artToMove = e.target.parentElement.parentElement;

        let greenToRemove = artToMove.querySelector('.green');
        let redToRemove = artToMove.querySelector('.red');
        greenToRemove.remove();
        redToRemove.remove();

        let divFlexProgress = artToMove.querySelector('div');

        let redBtnProgress = document.createElement('button');
        let orangeBtnProgress = document.createElement('button');

        redBtnProgress.className = 'red';
        redBtnProgress.textContent = 'Delete';
        orangeBtnProgress.className = 'orange';
        orangeBtnProgress.textContent = 'Finish';

        divFlexProgress.appendChild(redBtnProgress);
        divFlexProgress.appendChild(orangeBtnProgress);

        redBtnProgress.addEventListener('click', deleteBtn);
        orangeBtnProgress.addEventListener('click', finishBtnFunc);

        progressDiv.appendChild(artToMove);


        // SECOND WAY
        // let first = e.target.parentElement.children[0] //selecting the start button 
        // let buttonFinish = document.createElement("button")
        // buttonFinish.classList.add("orange")
        // buttonFinish.textContent = "Finish"

        // buttonFinish.addEventListener("click", finishBtnFunc);
        // e.target.parentElement.appendChild(buttonFinish);
        // document.getElementById("in-progress").appendChild(e.target.parentElement.parentElement)
        // e.target.parentElement.removeChild(first) //removing the start button

    };

    function deleteBtn(e) {
        e.target.parentElement.parentElement.remove();
    }

    function finishBtnFunc(e) {

        // document.querySelector("h1.green").parentElement.parentElement.children[1].appendChild(e.target.parentElement.parentElement)
        // e.target.parentElement.remove() //remove all btns\  - 100/100

        e.preventDefault();
        let finishDiv = completeTask.querySelector('div:last-of-type');
        let completeArticle = e.target.parentElement.parentElement;
        e.target.parentElement.remove();
        finishDiv.appendChild(completeArticle);

    }


}