document.addEventListener("DOMContentLoaded", function() {
  // Get the configuration element
  const configElement = document.getElementById('header-config');

  // Extract the configuration values from data-attributes
  const config = {
      title: configElement.getAttribute('data-title'),
      navLinks: JSON.parse(configElement.getAttribute('data-menu-links'))  // Parse JSON string for links
  };

  // Template for the header and menu
  function generateHeader(config) {
      return `
          <header id="top">
              <nav>
                  <div class="logo-holder">
                      <a href="index.html">Study with Lord Junn</a>
                  </div>
                  <div class="title">${config.title}</div>
                  <button class="menu-toggle" aria-label="Toggle menu">
                      ☰
                  </button>
                  <ul class="dropdown">
                      ${config.navLinks.map(link => {
                          if (link.href) {
                              // If `href` exists, create a link
                              return `<li class="${link.text === 'Back to home' ? 'show-on-mobile' : ''}">
                                          <a href="${link.href}">${link.text}</a>
                                      </li>`;
                          } else {
                              // If no `href`, render it as plain text
                              return `<li>${link.text}</li>`;
                          }
                      }).join('')}
                  </ul>
              </nav>
          </header>
      `;
  }

  // Insert the generated header into the container
  document.getElementById('header-container').innerHTML = generateHeader(config);

  // Mobile Menu Toggle: Add event listener to toggle menu visibility on small screens
  const menuToggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.dropdown');

  menuToggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('show');
  });
});



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
  