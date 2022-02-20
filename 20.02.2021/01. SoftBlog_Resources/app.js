function solve() {

   const authorInput = document.getElementById("creator");
   const titleInput = document.getElementById("title");
   const categoryInput = document.getElementById("category");
   const contentInput = document.getElementById("content");

   let archiveSection = document.querySelector('.archive-section ol');

   let createBtn = document.getElementsByClassName("create")[0];

   let articleSectionElement = document.querySelector(".site-content>main>section");

   createBtn.addEventListener('click', (e) => {
      e.preventDefault();

      let article = document.createElement('article');

      let titleH1 = document.createElement('h1');
      titleH1.textContent = titleInput.value;

      let categoryTag = document.createElement('p');
      categoryTag.textContent = 'Category: ';

      let strongCategory = document.createElement('strong');
      strongCategory.textContent = categoryInput.value;
      categoryTag.appendChild(strongCategory);

      let creatorTag = document.createElement('p');
      creatorTag.textContent = 'Creator: ';

      let authorStrong = document.createElement('strong');
      authorStrong.textContent = authorInput.value;
      creatorTag.appendChild(authorStrong);

      let contentTag = document.createElement('p');
      contentTag.textContent = contentInput.value;

      // creating button in post article
      let divButtons = document.createElement('div');
      divButtons.classList.add('buttons')
      // deleting button
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'btn delete';
      divButtons.appendChild(deleteBtn);


      deleteBtn.addEventListener('click', (e) => {
         e.currentTarget.parentNode.parentNode.remove();
      })
      //  arhive button 
      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.className = 'btn archive';
      divButtons.appendChild(archiveBtn);

      archiveBtn.addEventListener('click', (e) => {
         let liElement = document.createElement('li');
         liElement.textContent = titleH1.textContent;
         archiveSection.appendChild(liElement);

         Array.from(archiveSection.getElementsByTagName("li"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => archiveSection.appendChild(li));

         e.currentTarget.parentNode.parentNode.remove();

      });

      article.appendChild(titleH1);
      article.appendChild(categoryTag);
      article.appendChild(creatorTag);
      article.appendChild(contentTag);
      article.appendChild(divButtons);

      articleSectionElement.appendChild(article);

      authorInput.value = '';
      titleInput.value = '';
      contentInput.value = '';
      categoryInput.value = '';

   });

}