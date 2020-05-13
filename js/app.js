/* Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 */


/* Define global variables */

const allSections = document.querySelectorAll('section');
const navbar = document.getElementById('navbar__list');

/*
 * End Global Variables
 * Start Helper Functions
*/

// Define function to dinamically build the nav menu

function buildNavMenu() {
    for (let i = 0; i < allSections.length; i++) {
        let sectionId = allSections[i].querySelector('h2').textContent;
        let li = document.createElement('li');
        li.textContent = sectionId;
        li.className = 'menu__link';
        navbar.appendChild(li);
        li.addEventListener('click', function (event) {
            allSections[i].scrollIntoView({ behavior: 'smooth' });
        })
    }
}


// Build nav menu
buildNavMenu();

// Scroll to section on link click


// Make sections active

// Scroll to anchor ID using scrollTO event

// Set sections as active

