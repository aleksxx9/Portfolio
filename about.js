(function () {
    fetch('../data.json')
        .then(res => res.json())
        .then(data => {
            const hr1 = document.createElement('hr');
            const hr2 = document.createElement('hr');
            const hr = document.createElement('hr');
            const hrInvisible = document.createElement('hr');
            const hrInvisible1 = document.createElement('hr');
            hr1.classList.add('full');
            hr2.classList.add('full');
            hr.classList.add('full');
            hrInvisible.classList.add('full', 'invisible');
            hrInvisible1.classList.add('full', 'invisible');
            const main = document.getElementsByClassName('row')[0];
            const profPic = document.createElement('div');
            profPic.classList.add('profileContainer', "card");

            const img = document.createElement('img');
            img.src = data.profile.pic;
            img.alt = 'Profile picture';
            img.classList.add('profilePic');
            profPic.append(img);

            const cardProfile = document.createElement('div');
            cardProfile.classList.add('card', 'cardContent');

            const name = document.createElement('h1');
            name.classList.add('name');
            name.innerHTML = data.profile.name;

            const position = document.createElement('p');
            position.innerHTML = data.profile.heading;

            const description = document.createElement('p');
            description.innerHTML = data.profile.description;

            cardProfile.append(name);
            cardProfile.append(position);
            cardProfile.append(description);

            main.append(profPic);
            main.append(cardProfile);
            main.append(hr);

            const education = document.createElement('div');
            education.classList.add('half', 'margin');

            const educationHeader = document.createElement('h1');
            educationHeader.innerHTML = 'Education';

            education.append(educationHeader);
            for (let i = 0; i < data.about.education.years.length; i++) {
                const year = document.createElement('h3');
                year.innerHTML = data.about.education.years[i];

                const description = document.createElement('p');
                description.innerHTML = data.about.education.description[i];

                education.append(year);
                education.append(description);
            }

            main.append(education);
            main.append(hrInvisible);

            const experience = document.createElement('div');
            experience.classList.add('half', 'margin');

            const experienceHeader = document.createElement('h1');
            experienceHeader.innerHTML = 'Experience';
            experience.append(experienceHeader);
            
            for (let i = 0; i < data.about.experience.years.length; i++) {
                const year = document.createElement('h3');
                year.innerHTML = data.about.experience.years[i];

                const description = document.createElement('p');
                description.innerHTML = data.about.experience.description[i];

                experience.append(year);
                experience.append(description);
            }

            main.append(experience);
            main.append(hr1);

            const skills = document.createElement('div');
            skills.classList.add('full');
            const skillsHeader = document.createElement('h1');
            skillsHeader.style.display = "block";
            skillsHeader.innerHTML = 'Skills';

            skills.append(skillsHeader);

            const skillBlock = document.createElement('div');
            skillBlock.classList.add('block');

            const ul1 = document.createElement('ul');
            for (let i = 0; i < data.about.skills.length / 2; i++) {
                const li = document.createElement('li');
                li.innerHTML = data.about.skills[i];
                ul1.append(li);
            }

            skillBlock.append(ul1);
            const ul2 = document.createElement('ul');
            ul2.classList.add('list');
            for (let i = data.about.skills.length / 2; i < data.about.skills.length; i++) {
                const li = document.createElement('li');
                li.innerHTML = data.about.skills[i];
                ul2.append(li);
            }

            skillBlock.append(ul2);
            skills.append(skillBlock);
            main.append(skills);
            main.append(hr2);

            const other = document.createElement('div');
            const otherHeader = document.createElement('h1');

            other.classList.add('half', 'margin');
            otherHeader.innerHTML = 'Other';
            other.append(otherHeader);

            for (let i = 0; i < data.about.other.length; i++) {
                const p = document.createElement('p');
                p.innerHTML = data.about.other[i];
                other.append(p);
            }

            main.append(other);
            main.append(hrInvisible1);

            const hobbies = document.createElement('div');
            const hobbiesHeader = document.createElement('h1');
            hobbiesHeader.innerHTML = 'Hobbies';
            hobbies.classList.add('half', 'margin');

            hobbies.append(hobbiesHeader);
            const hobbiesList = document.createElement('ul');
            for (let i = 0; i < data.about.hobbies.length; i++) {
                const li = document.createElement('li');
                li.innerHTML = data.about.hobbies[i];
                hobbiesList.append(li);
            }
            hobbies.append(hobbiesList);
            main.append(hobbies);
        });
})()