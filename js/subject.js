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
  
  document.addEventListener('DOMContentLoaded', function() {
  
    // Dropdown Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('ul.dropdown');
  
    menuToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('show');
    });
  });
  