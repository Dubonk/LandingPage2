let timeDisplay = document.getElementById('time');

function refreshTime() {
    let dateString = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    let formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);