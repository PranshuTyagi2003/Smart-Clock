var wakeUpTime = 7
var noon = 12
var lunchtime = 12
var naptime = lunchtime + 2
var partytime
var evening = 18

// Getting it to show the current time on the Page

var showCurrentTime= function() {

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set Hours
    if (hours >= noon){
        meridian = "PM"
    }
    if (hours > noon){
        hours = hours - 12
    }

    // Set Minutes
    if (seconds< 10){
        seconds = "0"+seconds
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " "+ meridian + '!';
    $("#clock").text(clockTime)
};


// Getting the clock to increment on its own and change out messages and pictures
var updateClock= function() {
    var time= new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg"

    var timeEventJS = $("#timeEvent");
    var lolcatImageJS = $("lolcatImage");

    if (time==partytime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's Party"
    }
    else if (time == wakeUpTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake Up!!!!"
    }

    else if (time==lunchtime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }

    else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    }

    else if (time<noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    }

    else if (time>=evening){
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.text(messageText);
    lolcatImageJS.src = image

    showCurrentTime()
};

updateClock();

// Getting the clock to increment once a second
setInterval(updateClock, 1000)

// Getting PArty button to work

var partyButton= $("#partyTimeButton");

var partyEvent = function(){
    if (partytime < 0){
        partytime = new Date().getHours();
        partyButton.innerText = "Party Over!"
        partyButton.style.backgroundColor = "#0A8DAB";
    }

    else {
        partytime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222"
    }
};

partyButton.on("click", partyEvent)    /////////
partyEvent()


// Activates Wake Up Selector
var wakeUpTimeSelector = $("#wakeUpTimeSelector")

var wakeupEvent= function() {
    wakeUpTime = wakeUpTimeSelector.value
};
wakeUpTimeSelector.addEventListener("change", wakeupEvent)


// Activates Lunch Selector
var lunchtimeSelector = $("#lunchTimeSelector")

var lunchEvent= function() {
    lunchtime = lunchtimeSelector.value;
};
lunchtimeSelector.addEventListener("change", lunchEvent)

// Activates Nap-Time Selector
var napTimeSelector = $("#napTimeSelector")

var napEvent = function() {
    naptime = napTimeSelector.value
}
napTimeSelector.addEventListener("change", napEvent)