function solve() {

    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dueDataInput = document.getElementById('date');

    let allSections = Array.from(document.querySelectorAll('section'));
    let openTask = allSections[1];
    let inProgress = allSections[2];
    let completeTask = allSections[3];

    let addButtonTask = document.getElementById('add');

    addButtonTask.addEventListener('click', onClick);

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
        greenToRemove.remove();
        let redToRemove = artToMove.querySelector('.red');
        redToRemove.remove();

        let divFlex = artToMove.querySelector('div');

        let redBtnProgress = document.createElement('button');
        redBtnProgress.className = 'red';
        redBtnProgress.textContent = 'Delete';
        divFlex.appendChild(redBtnProgress);

        let orangeBtnProgress = document.createElement('button');
        orangeBtnProgress.className = 'orange';
        orangeBtnProgress.textContent = 'Finish';
        divFlex.appendChild(orangeBtnProgress);


        redBtnProgress.addEventListener('click', deleteBtn);
        orangeBtnProgress.addEventListener('click', finishBtnFunc);

        progressDiv.appendChild(artToMove);

    };

    function finishBtnFunc(e) {
        e.preventDefault();

        let finishDiv = completeTask.querySelector('div:last-of-type');
        let completeArticle = e.target.parentElement.parentElement;
        e.target.parentElement.remove();
        finishDiv.appendChild(completeArticle);

        // e.preventDefault();
        // let finishDiv = completeTask.querySelector('div:last-of-type');
        // let completeArticle = e.target.parentElement.parentElement;
        // let orangeToRemove = completeArticle.querySelector('.orange');
        // orangeToRemove.remove();
        // let redToRemove = completeArticle.querySelector('.red');
        // redToRemove.remove();
        // finishDiv.appendChild(completeArticle); ----- 87/100
    }

    function deleteBtn(e) {
        e.target.parentElement.parentElement.remove();
    }



}