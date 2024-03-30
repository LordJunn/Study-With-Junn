const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};

// Set the date we're counting down to
var countDownDate = new Date("4 Nov, 2024 00:00:00").getTime();
var countStartDate = new Date("25 Mar, 2024 00:00:00").getTime();
var TIME_LIMIT = 1000 * 60 * 60 * 24; // 24 hours in milliseconds

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    var realdistance = countDownDate - countStartDate;    
    var altdistance = now - countDownDate;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var realhours = Math.floor(distance / (1000 * 60 * 60));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var mseconds = Math.floor((distance % (1000)));  

    // Time calculations for days, hours, minutes and seconds
    var arealhours = Math.floor(altdistance / (1000 * 60 * 60));

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = "Commences in: " + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Calculate the time fraction
    var timeFraction = ( 1 - ( distance / realdistance));
    var progressWidth = timeFraction * 100 ;

    // Display the result in the element with id="otherdemo"
    document.getElementById("otherdemo").innerHTML = realhours + " hours until the bar is full."; 

    // Update the progress bar
    document.getElementById("progress").style.width = progressWidth + "%";

    // Change the progress color at certain points of time
    if (progressWidth >= 20 && progressWidth < 40) { // 20%
      document.getElementById("progressbg").style.backgroundColor = "Chartreuse";      
      document.getElementById("progress").style.setProperty('--progress-color', 'Chartreuse');
      document.getElementById("progress").style.setProperty('--pulse-color', 'yellow');
  } else if (progressWidth >= 40 && progressWidth < 60) { // 40%
    document.getElementById("progressbg").style.backgroundColor = 'yellow';
      document.getElementById("progress").style.setProperty('--progress-color', 'yellow');
      document.getElementById("progress").style.setProperty('--pulse-color', 'orange');
    } else if (progressWidth >= 60 && progressWidth < 80) { // 60%
      document.getElementById("progressbg").style.backgroundColor = 'orange'
      document.getElementById("progress").style.setProperty('--progress-color', 'orange');
      document.getElementById("progress").style.setProperty('--pulse-color', 'red');
    } else if (progressWidth >= 80 && progressWidth < 95) { // 80%
      document.getElementById("progressbg").style.backgroundColor = 'red';
      document.getElementById("progress").style.setProperty('--progress-color', 'red');
      document.getElementById("progress").style.setProperty('--pulse-color', 'darkred');
    } else if (progressWidth >= 95 && progressWidth < 100) { // 95%
    document.getElementById("progressbg").style.backgroundColor = 'darkred';
    document.getElementById("progress").style.setProperty('--progress-color', 'darkred');
    document.getElementById("progress").style.setProperty('--pulse-color', 'black');
    } else if (progressWidth >= 100) { // death
    document.getElementById("progressbg").style.backgroundColor = 'black';
    document.getElementById("progress").style.setProperty('--progress-color', 'white');
    document.getElementById("progress").style.setProperty('--pulse-color', 'black');
    } else {
      document.getElementById("progressbg").style.backgroundColor = "green";      
      document.getElementById("progress").style.setProperty('--progress-color', 'green');
      document.getElementById("progress").style.setProperty('--pulse-color', 'Chartreuse');
    }

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "The countdown has ended " + arealhours + " hours ago." ;    
        document.getElementById("otherdemo").innerHTML = "But otherwise, the progress bar is actually " + progressWidth + "% full!";      
    }
}, 300);