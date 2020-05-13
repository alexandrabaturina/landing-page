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

function isInViewport(elem) {
    const box = elem.getBoundingClientRect();
    return (box.top >= -300 && box.left >= 0 &&
        box.bottom <= (window.innerHeight + 300 || elem.clientHeight + 300) &&
        box.right <= (window.innerWidth || elem.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    makeActive();
})

function makeActive() {
    const menuLinks = document.querySelectorAll(".menu__link");
    if (menuLinks.length === allSections.length) {

        for (let i = 0; i < allSections.length; i++) {
            if (isInViewport(allSections[i])) {
                console.log(i + 1);
                allSections[i].classList.add('your-active-class');
                menuLinks[i].classList.add('active');
            } else {
                allSections[i].classList.remove('your-active-class');
                menuLinks[i].classList.remove('active');
            }

        }
    }
}



// Build nav menu
buildNavMenu();

// Scroll to section on link click


// Make sections active

// Scroll to anchor ID using scrollTO event

// Set sections as active

