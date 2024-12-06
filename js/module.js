
window.onload = function() {
    // Get the configuration element
    const configElement = document.getElementById('header-config');

    // Extract the configuration values from data-attributes
    const config = {
        title: configElement.getAttribute('data-course'),
        navLinks: [
            { href: "../index.html#Courses", text: "Courses" },
            { href: configElement.getAttribute('data-topic-link'), text: "Topic List" },  // Use the value from the data-attribute
            { href: "../index.html#top", text: "Home" }
        ]
    };

    // Template for the header and menu
    function generateHeader(config) {
        return `
            <header id="top">
                <nav>
                    <div class="logo-holder">
                        <a href="../index.html">Study with Junn</a>
                    </div>
                    <h4>${config.title}</h4>
                    <button class="menu-toggle" id="menu-toggle">
                        <span class="menu-text">☰</span>
                    </button>
                    <ul id="nav-menu">
                        ${config.navLinks.map(link => `
                            <li><a href="${link.href}">${link.text}</a></li>
                        `).join('')}
                    </ul>
                </nav>
            </header>
        `;
    }

    // Insert the generated header into the container
    document.getElementById('header-container').innerHTML = generateHeader(config);

    // Mobile Menu Toggle: Add event listener to toggle menu visibility on small screens
    const menuToggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
};

