fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const main = document.getElementsByClassName('main')[0];

        const row = document.createElement('div');

        row.classList.add('row');

        const full = document.createElement('div');
        full.classList.add('full');
        row.append(full);
        
        for (let i = 0; i < data.projects.length; i++) {
            const projectImgContainer = document.createElement('div');
            projectImgContainer.classList.add('card', 'img');

            const projectImg = document.createElement('img');
            projectImg.src = data.projects[i].pic;
            projectImg.style.width = '300px';

            projectImgContainer.append(projectImg);

            row.append(projectImgContainer);

            const projectContainer = document.createElement('div');
            projectContainer.classList.add('cardContent', 'card');

            const projectName = document.createElement('h1');
            projectName.classList.add('hCenter');
            projectName.innerHTML = data.projects[i].name;

            projectContainer.append(projectName);

            const projectDescriptionHeader = document.createElement('h3');
            projectDescriptionHeader.classList.add('hCenter');
            projectDescriptionHeader.innerHTML = 'Short description';

            projectContainer.append(projectDescriptionHeader);

            const projectDescription = document.createElement('p');
            projectDescription.innerHTML = data.projects[i].description;

            projectContainer.append(projectDescription);

            const linkContainer = document.createElement('div');
            linkContainer.classList.add('cardContent', 'card', 'iconBox');

            const gitLink = document.createElement('a');
            gitLink.href = data.projects[i].git;
            gitLink.classList.add('projectIcons');
            const gitIconContainer = document.createElement('div');
            gitIconContainer.classList.add('link');
            const gitIcon = document.createElement('i');
            gitIcon.classList.add('fab', 'fa-github-square', 'fa-lg', 'black');


            const webLink = document.createElement('a');
            webLink.href = data.projects[i].web;
            webLink.classList.add('projectIcons');
            const webIconContainer = document.createElement('div');
            webIconContainer.classList.add('link');
            const webIcon = document.createElement('i');
            webIcon.classList.add('fab', 'fa-chrome', 'fa-lg', 'black');


            gitIconContainer.append(gitIcon);
            webIconContainer.append(webIcon);

            gitLink.append(gitIconContainer);
            webLink.append(webIconContainer);

            linkContainer.append(gitLink);
            linkContainer.append(webLink);

            row.append(projectContainer);

            row.append(linkContainer);

            const hrInvisible = document.createElement('hr');
            hrInvisible.classList.add('full', 'invisible');
            row.append(hrInvisible);
        }

        main.appendChild(row);
    });