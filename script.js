const themeBtn = document.querySelector('#theme');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const subSection = document.querySelector('.subsection');
const projectLinks = document.querySelector('.squares');
const quotes = document.querySelector('.quote');
const action = document.querySelector('.action');
const footer = document.querySelector('.footer');
const title = document.querySelector('#title');
let timeDisplay = document.getElementById('time');

function refreshTime() {
    let dateString = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    let formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

themeBtn.addEventListener('click', () => {
    themeBtn.textContent = 'Light';
    header.classList.toggle('darker');
    main.classList.toggle('darkTheme');
    subSection.classList.toggle('darker');
    projectLinks.classList.toggle('darker');
    action.classList.toggle('darkTheme');
    quotes.classList.toggle('darker');
    footer.classList.toggle('darker');
    subSection.style.borderBottom = 'none';
    footer.style.borderBottom = 'none';
    title.style.color = 'white';
    if(subSection.classList.contains('darker')) {
        themeBtn.textContent = 'Light';
    }
    else {
        themeBtn.textContent = 'Dark';
    }
});

function enableDark() {
    themeBtn.textContent = 'Light';
    header.classList.toggle('darker');
    main.classList.toggle('darkTheme');
    subSection.classList.toggle('darker');
    projectLinks.classList.toggle('darker');
    action.classList.toggle('darkTheme');
    quotes.classList.toggle('darker');
    footer.classList.toggle('darker');
    subSection.style.borderBottom = 'none';
    footer.style.borderBottom = 'none';
    if(subSection.classList.contains('darker')) {
        themeBtn.textContent = 'Light';
    }
    else {
        themeBtn.textContent = 'Dark';
    }
}

enableDark();