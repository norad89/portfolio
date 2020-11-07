window.onload = function timeUpdate() {
    var date = new Date();
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = weekdays[date.getDay()];
    var options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var dateFormat = date.toLocaleString("en-US", options);
    var currentTime = document.getElementById('time');
    currentTime.innerHTML = "Today is " + currentDay + ", current time is " + dateFormat;
    setInterval(timeUpdate, 1000);
};

var countDownDate = new Date("April 15, 2021 00:00:01").getTime();
var button = document.getElementById("countDownButton");
button.innerHTML = "<button onclick=birthdayButton()>Find out when it's my Birthday</button>";

function birthdayButton() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    button.innerHTML = "<p>My next birthday is in: " + (days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds. ") + "<p>";

    var countDownRefresh = setInterval(birthdayButton, 1000);

    if (distance < 0) {
        clearInterval(countDownRefresh);
        document.getElementById("countDownButton").innerHTML = "<p>Today's My Birthday!</p>";
    };
}