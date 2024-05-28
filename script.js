const themeBtn = document.querySelector('#theme');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const subSection = document.querySelector('.subsection');
const projectLinks = document.querySelector('.squares');
const quotes = document.querySelector('.quote');
const action = document.querySelector('.action');
const footer = document.querySelector('.footer');
const title = document.querySelector('#title');
const dropBtn = document.querySelector('.dropBtn');
const moonSvg = document.createElement('img');
moonSvg.src = 'svg/moon.svg';
moonSvg.setAttribute('id', 'moon');
const sunSvg = document.createElement('img');
sunSvg.src = 'svg/sun.svg';
sunSvg.setAttribute('id', 'sun')
let timeDisplay = document.getElementById('time');

function refreshTime() {
    let dateString = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    let formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

themeBtn.addEventListener('click', () => {
    themeBtn.appendChild(sunSvg);
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
        themeBtn.appendChild(sunSvg);
        themeBtn.removeChild(moonSvg);
    }
    else {
        themeBtn.appendChild(moonSvg);
        themeBtn.removeChild(sunSvg);
    }
});

// dropBtn.addEventListener('mouseover', () => {
//     dropBtn.classList.toggle('dropDownLight');
// })

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let num = Math.floor(Math.random() * (16 - 1 + 1) + 1)
    let quotes = data[num];
    quote.textContent = quotes.text;
    author.textContent = '- ' + quotes.author.split(",")[0];
    console.log(data, quotes);
  });

function enableDark() {
    themeBtn.appendChild(sunSvg);
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
        themeBtn.appendChild(sunSvg);
        if(themeBtn.contains(moonSvg)){
        themeBtn.removeChild(moonSvg);
        }
    }
    else {
        themeBtn.appendChild(moonSvg);
        themeBtn.removeChild(sunSvg);
    }
}

enableDark();