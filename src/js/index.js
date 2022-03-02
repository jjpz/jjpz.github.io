// scroll to contact section
document.querySelector('.available a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({behavior: 'smooth'});
});

// display current year in footer
const year = new Date().getFullYear();
let footerYear = document.querySelector('.year');
footerYear.innerHTML = year;
