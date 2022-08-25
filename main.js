let wrapper = document.querySelector('.wrapper');

let title = document.createElement('h1');
let year = document.createElement('span');
year.textContent = asabenehChallenges2020.challengeYear;
let titleContent = `${asabenehChallenges2020.description} in `;
title.textContent = titleContent;
title.appendChild(year);
wrapper.appendChild(title);
title.style.marginBottom = "0";
title.style.fontFamily = "sans-serif";
title.style.textAlign = "center";

let subtitle = document.createElement('h2');
subtitle.textContent = asabenehChallenges2020.challengeSubtitle;
wrapper.appendChild(subtitle);
subtitle.style.fontFamily = "sans-serif";
subtitle.style.textAlign = "center";

/*YEAR CHANGING COLOR*/
function yearColor(){
    yearColorInterval = setInterval(randomYearColor,1000);
}
function randomYearColor(){
    for(let i = 0;i < 9;i++){
        let randomNum = Math.round(Math.random()*9);
        if (randomIndexNumber === randomNum){
            randomNum = randomNum++;
            randomIndexNumber = randomNum;
        } else {
            randomIndexNumber = randomNum;
        }
    }
    //console.log(randomIndexNumber);
    year.style.color = colorArray[randomIndexNumber];
}
yearColor();

/* BOX COLOR DYNAMIC DATE */
let boxDateWrapper = document.createElement('div');
boxDateWrapper.style.display = "flex";
boxDateWrapper.style.justifyContent = "center";
boxDateWrapper.style.alignItems = "center";
wrapper.appendChild(boxDateWrapper);
let boxDate = document.createElement('h5');
boxDateWrapper.appendChild(boxDate);
boxDate.style.padding = "8px";
boxDate.style.border = "2px solid black";
boxDate.style.backgroundColor = "red";
boxDate.style.margin = "5px";
boxDate.style.fontSize = "1.5rem";

let colorArray = ["red", "lightblue", "blue", "green", "gray", "yellow", "violet", "pink", "orange"];
let randomIndexNumber = 0;

function boxActualDate(){
    actualDateInterval = setInterval(actualDate,1000);
    changeBgColor = setInterval(randomColor, 1000);
}
function actualDate(){
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    if (day < 10) day = "0" + day;
    let year = date.getFullYear();
    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    let min = date.getMinutes();
    if (min < 10) min = "0" + min;
    let sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;
    //console.log(monthArray[month] + " " + day + ", " + year + " " + hour+":"+min+":"+sec);
    let actualDate = `${monthArray[month]} ${day}, ${year} ${hour}:${min}:${sec}`;
    boxDate.innerHTML = actualDate;
    boxDate.style.display = "block";
}

function randomColor(){
    for(let i = 0;i < 9;i++){
        let randomNum = Math.round(Math.random()*9);
        if (randomIndexNumber === randomNum){
            randomNum = randomNum++;
            randomIndexNumber = randomNum;
        } else {
            randomIndexNumber = randomNum;
        }
    }
    //console.log(randomIndexNumber);
    boxDate.style.backgroundColor = colorArray[randomIndexNumber];
}
//habria que mejorar el codigo porque a veces se repiten los index.
boxActualDate();

/*-----------CHALLENGES SECTION-------------*/
let challengesWrapper = document.createElement('div');
challengesWrapper.classList = "challenge-wrapper";
challengesWrapper.style.margin = "5vh 10vw";
wrapper.appendChild(challengesWrapper);

//console.log(asabenehChallenges2020.challenges);
let challengesArr = asabenehChallenges2020.challenges;
/*for(propiedad in challengesArr){
    console.log(challengesArr[propiedad].topics[0]);
}*/
for(challenge of challengesArr){
    let challengeDiv = document.createElement('div');
    challengeDiv.classList = "challenge-container"
    challengeDiv.style.margin = ".2rem";
    challengeDiv.style.padding = "1.2rem";
    challengeDiv.style.display = "grid";
    challengeDiv.style.gridTemplateColumns = "1fr 1fr 1fr";
    if (challenge.status == "Done"){
        challengeDiv.style.backgroundColor = "#64bd46";
    } else if (challenge.status == "Ongoing"){
        challengeDiv.style.backgroundColor = "#ffef40";
    } else {
        challengeDiv.style.backgroundColor = "#f55353";
    }
    challengesWrapper.appendChild(challengeDiv);

    let challengeP = document.createElement('p');
    challengeDiv.appendChild(challengeP);
    challengeP.classList = "challenge";
    challengeP.textContent = challenge.name;
    challengeP.style.gridColumn = "1";
    challengeP.style.fontFamily = "sans-serif";
    challengeP.style.fontSize = "1rem";
    //console.log(challenge.name);

    let details = document.createElement('details');
    challengeDiv.appendChild(details);
    details.style.margin = "auto 20px";
    let topics = document.createElement('summary');
    details.appendChild(topics);
    let stringChallenge = challenge.name;
    let challengeArr = stringChallenge.split(" ");
    //console.log(challengeArr)
    topics.textContent = challengeArr[challengeArr.length-1];
    if(challenge === challengesArr[2]){
        topics.textContent = `${challengeArr[3]} ${challengeArr[4]} ${challengeArr[5]}`
    }
    topics.style.gridColumn = "2";
    topics.style.fontFamily = "sans-serif";
    topics.style.fontSize = "1rem";
    topics.style.fontWeight = "bolder";
    let topicsList = document.createElement('ul');
    details.appendChild(topicsList);
    topicsList.style.margin = "5px -40px";
    topicsList.style.fontFamily = "sans-serif";
    topicsList.style.fontSize = "1rem";   
    
    let topicsArr = challenge.topics;
    let word = "";
    for (topic of topicsArr){
        let t = document.createElement('li');
        topicsList.appendChild(t);
        t.classList = "topic";
        t.style.listStyle = "none";
        t.style.fontFamily = "sans-serif";
        t.style.fontSize = "1rem";
        t.style.padding = "2px 0px"
        word = topic
        t.textContent = word;
        word = "";
        //console.log(topic);
    }
    //console.log(challenge.topics)

    let progress = document.createElement('p');
    progress.classList = "progress";
    progress.textContent = challenge.status;
    progress.style.gridColumn = "3";
    progress.style.margin = "auto auto";
    //progress.style.marginRight = "25px";
    progress.style.fontFamily = "sans-serif";
    progress.style.fontSize = "1rem";
    progress.style.textAlign = "right"
    challengeDiv.appendChild(progress);
}

/*------------SOCIAL MEDIA SECTION------------*/
let name = document.createElement('h3');
wrapper.appendChild(name);
let fullName = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`
//onsole.log(fullName);
name.textContent = fullName;
name.style.fontSize = "2rem";
name.style.marginTop = "0px";
name.style.marginBottom = "10px";
name.style.fontFamily = "sans-serif";
name.style.textAlign = "center";

/*Logos Social Media*/
let socialMedia = document.createElement('div');
socialMedia.classList = "social-media";
socialMedia.style.display = "flex";
socialMedia.style.justifyContent = "center";
socialMedia.style.alignItems = "center";
socialMedia.style.flexDirection = "row";
wrapper.appendChild(socialMedia);

let socialLinksArr = asabenehChallenges2020.author.socialLinks;
for (red of socialLinksArr){
    //console.log(red.social);
    if (red.social == "LinkedIn"){
        let linkedIn = document.createElement('div');
        linkedIn.classList = "linkedin";
        linkedIn.style.margin = "0px 5px";
        linkedIn.innerHTML = red.fontawesomeIcon;
        linkedIn.style.fontSize = "2rem";
        socialMedia.appendChild(linkedIn);        
    } else if (red.social == "Twitter"){
        let twitter = document.createElement('div');
        twitter.classList = "linkedin";
        twitter.style.margin = "0px 5px";
        twitter.innerHTML = red.fontawesomeIcon;
        twitter.style.fontSize = "2rem";
        socialMedia.appendChild(twitter);
    } else if (red.social == "Github"){
        let github = document.createElement('div');
        github.classList = "linkedin";
        github.style.margin = "0px 5px";
        github.innerHTML = red.fontawesomeIcon;
        github.style.fontSize = "2rem";
        socialMedia.appendChild(github);
    }
}

/*------------INTRO-------------*/
let intro = document.createElement('p');
wrapper.appendChild(intro);
intro.textContent = asabenehChallenges2020.author.bio;
intro.style.fontFamily = "sans-serif";
intro.style.textAlign = "center";
intro.style.fontSize = "1rem";
intro.style.margin = "5vh 10vw";

/*----------TITLES-SKILLS-QUALIFICATIOS------------*/
let divContainer = document.createElement('div');
wrapper.appendChild(divContainer);
divContainer.classList = "three-column-div";
divContainer.style.display = "grid";
divContainer.style.gridTemplateColumns = "1fr 1fr 1fr";
divContainer.style.gridGap = "1.5rem";
divContainer.style.margin = "5vh 10vw";

//titles
let titlesSection = document.createElement('p');
titlesSection.textContent = Object.keys(asabenehChallenges2020.author)[2];
titlesSection.style.textTransform = "capitalize";
titlesSection.style.fontFamily = "sans-serif";
titlesSection.style.fontSize = "1rem";
titlesSection.style.gridColumn = "1";
divContainer.appendChild(titlesSection);
let titlesSectionArr = asabenehChallenges2020.author.titles;
for (item of titlesSectionArr){
    li = document.createElement('li');
    li.innerHTML = `${item[0]} ${item[1]}`;
    li.style.fontSize = ".7rem";
    li.style.listStyle = "none";
    titlesSection.appendChild(li);
}
//skills
let skillsSection = document.createElement('p');
skillsSection.textContent = Object.keys(asabenehChallenges2020.author)[5];
skillsSection.style.textTransform = "capitalize";
skillsSection.style.fontFamily = "sans-serif";
skillsSection.style.fontSize = "1rem";
skillsSection.style.gridColumn = "2";
divContainer.appendChild(skillsSection);
let skillsSectionArr = asabenehChallenges2020.author.skills;
/*let icon = document.createElement('p');
icon.innerHTML = '<i class="fa-solid fa-square-check"></i>';
wrapper.appendChild(icon)
let check = document.querySelector('.fa-square-check');
check.style.backgroundColor = "red";*/

for (item of skillsSectionArr){
    li = document.createElement('li');
    li.innerHTML = item;
    li.style.fontSize = ".7rem";
    //li.style.listStyleImage = 'url()';
    //li.style.listStyle = "none";
    skillsSection.appendChild(li);
}
//qualifications
let qualificationsSection = document.createElement('p');
qualificationsSection.textContent = Object.keys(asabenehChallenges2020.author)[3];
qualificationsSection.style.textTransform = "capitalize";
qualificationsSection.style.fontFamily = "sans-serif";
qualificationsSection.style.fontSize = "1rem";
qualificationsSection.style.gridColumn = "3";
divContainer.appendChild(qualificationsSection);
let qualificationsSectionArr = asabenehChallenges2020.author.qualifications;
//console.log(asabenehChallenges2020.author.skills)
for (item of qualificationsSectionArr){
    li = document.createElement('li');
    li.innerHTML = item;
    li.style.fontSize = ".7rem";
    //li.style.listStyle = "none";
    qualificationsSection.appendChild(li);
}

/*---------- Keywords ----------*/
let keywordsTitle = document.createElement('h5');
keywordsTitle.textContent = Object.keys(asabenehChallenges2020)[4]
wrapper.appendChild(keywordsTitle);
keywordsTitle.style.textTransform = "capitalize";
keywordsTitle.style.fontFamily = "sans-serif";
keywordsTitle.style.textAlign = "center";

//console.log(asabenehChallenges2020.keywords);
let keywordsContainer = document.createElement('div');
wrapper.appendChild(keywordsContainer);
keywordsContainer.classList = "keyword-grid-container";
keywordsContainer.style.display = "grid";
keywordsContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(5rem, 1fr))";
keywordsContainer.style.gridAutoRows = "3rem";
keywordsContainer.style.gridGap = ".2rem";
keywordsContainer.style.margin = "5vh 10vw";


let keywordsArr = asabenehChallenges2020.keywords;

for (key of keywordsArr){
    var itemContainer = document.createElement('div');
    keywordsContainer.appendChild(itemContainer);
    itemContainer.style.display = "flex";
    itemContainer.style.alignItems = "center";
    itemContainer.style.justifyContent = "center";
    let item = document.createElement('p');
    itemContainer.appendChild(item);
    item.textContent = `#${key}`;
    item.style.fontSize = ".6rem";
    item.style.fontFamily = "sans-serif";
    item.style.textAlign = "center";
    item.style.fontWeight = "bolder";
    rgbColorGenerator();
    itemContainer.style.borderRadius = "40px";
    //console.log(key);
}

function rgbColorGenerator(){
    let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let num3 = Math.floor(Math.random()*256);
    itemContainer.style.backgroundColor = `RGB(${num1},${num2},${num3})`;
}
