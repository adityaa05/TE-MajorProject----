let currentSection = 0;

function transitionToSection(sectionIndex) {
    if (sectionIndex === 1) {
        document.getElementById('intro-section').style.animation = 'slideUp 0.7s forwards'; // Slide up intro section faster
        document.getElementById('signup-login-section').style.transform = 'translateY(0)';
        document.getElementById('subtitle').style.opacity = '0'; // Hide subtitle
        document.getElementById('navbar').style.visibility = 'visible'; // Make navbar visible immediately
        document.getElementById('navbar').style.opacity = '1'; // Fade-in navbar quickly
        document.getElementById('navbar').style.transform = 'translateY(0)'; // Move navbar into view quickly
        document.getElementById('intro-title').style.transform = 'scale(0.5) translateY(-50px)'; // Shrink and move title
        document.getElementById('intro-title').style.opacity = '0'; // Fade-out intro title
    } else if (sectionIndex === 0) {
        document.getElementById('intro-section').style.animation = 'none'; // Reset animation
        document.getElementById('intro-section').style.transform = 'translateY(0)';
        document.getElementById('signup-login-section').style.transform = 'translateY(100%)';
        document.getElementById('subtitle').style.opacity = '1'; // Show subtitle
        document.getElementById('navbar').style.opacity = '0'; // Fade-out navbar quickly
        document.getElementById('navbar').style.transform = 'translateY(-100%)'; // Move navbar out of view quickly
        document.getElementById('navbar').style.visibility = 'hidden'; // Hide navbar completely after transition
        document.getElementById('intro-title').style.transform = 'scale(1)'; // Reset title scale
        document.getElementById('intro-title').style.opacity = '1'; // Show intro title
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
