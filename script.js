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

bgButton.innerHTML = "<button onclick=backgroundButton()>Try me as well!</button>"

function backgroundButton() {
    var navbar = document.querySelectorAll("#navbar a")
    for(var i = 0; i < navbar.length; i ++) {
        navbar[i].addEventListener("mouseenter", (event) => {event.target.style.background='rgb(254, 67, 96)'})
        navbar[i].addEventListener("mouseleave", (event) => {event.target.style.background='rgb(0, 0, 0)'});
    }
    var cover = document.getElementById("cover")
    var aboutme = document.getElementById("aboutme")
    var goals = document.getElementById("goals")
    var why = document.getElementById("why")
    var contact = document.getElementById("contact")
    var social = document.querySelector("#social p")

    return (
        aboutme.style.background = 'linear-gradient(to bottom, #FE4360, white)',

        cover.style.background = 'url("images/cover2.jpg")',
        cover.style.backgroundPosition = 'center center',
        cover.style.backgroundSize = 'cover',
        cover.style.backgroundRepeat = 'uno-repeat',

        goals.style.background = 'radial-gradient(#FE4360, white)',
        why.style.background = 'radial-gradient(#FE4360, white)',

        contact.style.background = 'linear-gradient(to top, #FE4360, white)',

        social.style.backgroundColor = 'rgb(254, 67, 96)'

    )
}