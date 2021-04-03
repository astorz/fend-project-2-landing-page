/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

elemInCenter = (el) => {
    const rect = el.getBoundingClientRect();
    const viewport = window.innerHeight;
    return rect.top / viewport <= .5 && rect.bottom / viewport >= .5;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNav = () => {
    const sections = document.querySelectorAll('section');
    for (s of sections) {
        const sectionId = s.getAttribute('id');
        const sectionName = s.getAttribute('data-nav');
        const newSection = document.createElement('li');
        newSection.innerHTML = `<a href=#${sectionId}>${sectionName}</a>`;
        newSection.setAttribute('class', 'menu__link');
        document.querySelector('#navbar__list').appendChild(newSection);
    }
};

// Add class 'active' to section when near top of viewport
setActiveClass = () => {
    const activeClassEl= document.querySelector('.your-active-class');
    if(!elemInCenter(activeClassEl)){
        const sections = document.querySelectorAll('section');
        for (s of sections) {
            if(elemInCenter(s)){
                activeClassEl.classList.toggle('your-active-class');
                s.classList.toggle('your-active-class');
                return;
            }
        };
    }
}

// Scroll to anchor ID using scrollTO event
scrollOnClick = (event) => {
    event.preventDefault();
    // Good documentation here: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Scroll to a certain element
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({ 
        behavior: 'smooth'
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
document.addEventListener('DOMContentLoaded', createNav);

// Scroll to section on link click
document.querySelector('#navbar__list').addEventListener('click', scrollOnClick); 


// Set sections as active

// Used source below for further details during development:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

document.addEventListener('scroll', setActiveClass);




// Discovered property below via:
// https://stackoverflow.com/questions/4096863/how-to-get-and-set-the-current-web-page-scroll-position