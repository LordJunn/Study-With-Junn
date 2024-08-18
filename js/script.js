// Sticky Header Functionality
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  // Dropdown Menu Toggle
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('ul.dropdown');
  
    menuToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');
    });
  });
  
  // Countdown Timer Function
  function createCountdown(countDownDate, countStartDate, containerId) {
    var container = document.getElementById(containerId);
    var demo = document.createElement('p');
    var progressBar = document.createElement('div');
    var progressBarFill = document.createElement('div');
    var demo2 = document.createElement('p');
  
    demo.classList.add('countdown-display');
    progressBar.classList.add('progress-bar');
    progressBarFill.classList.add('progress-bar-fill');
    demo2.classList.add('countdown-display');
  
    container.appendChild(demo);
    progressBar.appendChild(progressBarFill);
    container.appendChild(progressBar);
    container.appendChild(demo2);
  
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var realdistance = countDownDate - countStartDate;
      var altdistance = now - countDownDate;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var realhours = Math.floor(distance / (1000 * 60 * 60));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var mseconds = Math.floor((distance % (1000)));  
  
      var arealhours = Math.floor(altdistance / (1000 * 60 * 60));
      var hoursText = hours < 2 ? "hour" : "hours";
  
      demo.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      if (realhours === 0) {
        let timeText = "";
        if (minutes > 0) {
          timeText = `${minutes} minute${minutes === 1 ? '' : 's'}`;
          if (seconds > 0) {
            timeText += ` and ${seconds} second${seconds === 1 ? '' : 's'}`;
          }
          timeText += " until the bar is full.";
        } else if (seconds > 0) {
          timeText = `${seconds} second${seconds === 1 ? '' : 's'} until the bar is full.`;
        } else {
          timeText = "until the bar is full.";
        }
        demo2.innerHTML = timeText;
      } else if (realhours > 1) {
        demo2.innerHTML = `${realhours} hours until the bar is full.`;
      } else {
        demo2.innerHTML = `${realhours} hour until the bar is full.`;
      }
  
      var timeFraction = (1 - (distance / realdistance));
      var progressWidth = timeFraction * 100;
  
      progressBarFill.style.width = progressWidth + "%";
  
      if (progressWidth >= 20 && progressWidth < 40) {
        progressBar.style.backgroundColor = "Chartreuse";
        progressBarFill.style.setProperty('--progress-color', 'Chartreuse');
        progressBarFill.style.setProperty('--pulse-color', 'yellow');
      } else if (progressWidth >= 40 && progressWidth < 60) {
        progressBar.style.backgroundColor = 'yellow';
        progressBarFill.style.setProperty('--progress-color', 'yellow');
        progressBarFill.style.setProperty('--pulse-color', 'orange');
      } else if (progressWidth >= 60 && progressWidth < 80) {
        progressBar.style.backgroundColor = 'orange';
        progressBarFill.style.setProperty('--progress-color', 'orange');
        progressBarFill.style.setProperty('--pulse-color', 'red');
      } else if (progressWidth >= 80 && progressWidth < 95) {
        progressBar.style.backgroundColor = 'red';
        progressBarFill.style.setProperty('--progress-color', 'red');
        progressBarFill.style.setProperty('--pulse-color', 'darkred');
      } else if (progressWidth >= 95 && progressWidth < 100) {
        progressBar.style.backgroundColor = 'darkred';
        progressBarFill.style.setProperty('--progress-color', 'darkred');
        progressBarFill.style.setProperty('--pulse-color', 'black');
      } else if (progressWidth >= 100) {
        progressBar.style.backgroundColor = 'black';
        progressBarFill.style.setProperty('--progress-color', 'white');
        progressBarFill.style.setProperty('--pulse-color', 'black');
      } else {
        progressBar.style.backgroundColor = "green";
        progressBarFill.style.setProperty('--progress-color', 'green');
        progressBarFill.style.setProperty('--pulse-color', 'Chartreuse');
      }
  
      if (distance < 0) {
        var positiveDistance = Math.abs(distance);
        var positiveRealHours = Math.abs(arealhours);
  
        if (realhours === 0) {
          demo.innerHTML = "The countdown has ended " + minutes + " minutes and " + seconds + " seconds ago.";
        } else if (arealhours === 1) {
          demo.innerHTML = "The countdown has ended " + positiveRealHours + " hour ago.";
        } else {
          demo.innerHTML = "The countdown has ended " + positiveRealHours + " hours ago.";
        }
  
        demo2.innerHTML = "If you prefer in milliseconds however, " + positiveDistance + " ms."
      }
    }, 10);
  }
  
  // Initialize Countdown Timers
  document.addEventListener('DOMContentLoaded', function() {
    var countDownDate1 = new Date("5 Nov, 2024 00:00:00").getTime();
    var countStartDate1 = new Date("25 Mar, 2024 00:00:00").getTime();
    createCountdown(countDownDate1, countStartDate1, "countdown-container-1");
  
    var countDownDate2 = new Date("5 Nov, 2024 00:00:00").getTime();
    var countStartDate2 = new Date("25 Mar, 2024 00:00:00").getTime();
    createCountdown(countDownDate2, countStartDate2, "countdown-container-2");
  
    var countDownDate3 = new Date("5 Jul, 2024 00:00:00").getTime();
    var countStartDate3 = new Date("25 Mar, 2024 00:00:00").getTime();
    createCountdown(countDownDate3, countStartDate3, "countdown-container-3");
  
    var countDownDate4 = new Date("9 Jul, 2024, 09:00:00").getTime();
    var countStartDate4 = new Date("24 Jun, 2024, 00:00:00").getTime();
    createCountdown(countDownDate4, countStartDate4, "countdown-container-4");
  
    var countDownDate5 = new Date("11 Jul, 2024, 09:00:00").getTime();
    var countStartDate5 = new Date("24 Jun, 2024, 00:00:00").getTime();
    createCountdown(countDownDate5, countStartDate5, "countdown-container-5");
  
    // Dropdown Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('ul.dropdown');
  
    menuToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');
    });
  });
  
  // Show Disclaimer Function
  function showDisclaimer() {
    var disclaimer = document.getElementById('disclaimer');
    disclaimer.style.display = 'block';
  }
  
  // Close Disclaimer Function
  function closeDisclaimer() {
    var disclaimer = document.getElementById('disclaimer');
    disclaimer.style.display = 'none';
  }  