// Get the elements
const navbar = document.querySelector('.navbar');
const home = document.querySelector('.home');
const about = document.querySelector('.about');

// Event Listeners
navbar.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
        home.style.display = 'block';
        about.style.display = 'none';
    } else {
        home.style.display = 'none';
        about.style.display = 'block';
    }
});