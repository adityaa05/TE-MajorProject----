let currentSection = 0;

function transitionToSection(sectionIndex) {
    if (sectionIndex === 1) {
        document.getElementById('intro-section').style.transform = 'translateY(-100%)';
        document.getElementById('signup-login-section').style.transform = 'translateY(0)';
        document.getElementById('subtitle').style.opacity = '0'; // Hide subtitle
    } else if (sectionIndex === 0) {
        document.getElementById('intro-section').style.transform = 'translateY(0)';
        document.getElementById('signup-login-section').style.transform = 'translateY(100%)';
        document.getElementById('subtitle').style.opacity = '1'; // Show subtitle
    }
    currentSection = sectionIndex;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && currentSection === 0) {
        transitionToSection(1);
    } else if (e.key === 'ArrowUp' && currentSection === 1) {
        transitionToSection(0);
    }
});

document.addEventListener('wheel', (e) => {
    if (e.deltaY > 0 && currentSection === 0) {
        transitionToSection(1);
    } else if (e.deltaY < 0 && currentSection === 1) {
        transitionToSection(0);
    }
});
