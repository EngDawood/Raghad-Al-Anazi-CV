
const educationSection = document.querySelector('.education');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Show More';

toggleButton.addEventListener('click', () => {
    const moreDetails = document.createElement('ul');
    moreDetails.innerHTML = `
        <li>2022-Present: Tabuk University - Majoring in Information Technology (Bachelor) - GPA: 3.5</li>
        <li>Additional education details...</li>
    `;
    educationSection.appendChild(moreDetails);
    toggleButton.style.display = 'none';
});

educationSection.appendChild(toggleButton);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
