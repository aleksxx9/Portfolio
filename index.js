fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    const main = document.getElementsByClassName('main')[0];

    const row = document.createElement('div');

    row.classList.add('row');

    const profileContainer = document.createElement('div');
    const profileImage = document.createElement('img');
    const profileContent = document.createElement('div');
    const header = document.createElement('h1');
    const headingPar = document.createElement('p');
    const descriptionPar = document.createElement('p');
    const hr = document.createElement('hr');

    hr.classList.add('full');

    profileContainer.classList.add('card', 'profileContainer');
    profileContent.classList.add('card', 'cardContent');
    header.classList.add('name');
    profileImage.classList.add('profilePic');

    header.innerHTML = data.profile.name;
    headingPar.innerHTML = data.profile.heading;

    profileImage.alt = "Profile picture";
    profileImage.src = data.profile.pic;

    profileContainer.append(profileImage);
    profileContent.append(header);
    profileContent.append(headingPar);

    descriptionPar.innerHTML = data.profile.description;
    profileContent.append(descriptionPar);

    row.append(profileContainer);
    row.append(profileContent);
    row.append(hr);

    const projectHeaderContainer = document.createElement('div');
    projectHeaderContainer.classList.add('full');

    const projectsHeader = document.createElement('h1');
    projectsHeader.classList.add('hCenter');
    projectsHeader.innerHTML = 'My projects';

    projectHeaderContainer.append(projectsHeader);

    row.append(projectHeaderContainer);
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