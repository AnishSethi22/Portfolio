window.addEventListener('load', function () {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        const bar = skill.querySelector('.bar-fill');
        const percentage = skill.querySelector('.skill-percentage');
        const skillWidth = bar.style.width;

        // Wait for the page to load, then start the animation
        setTimeout(() => {
            bar.style.width = skillWidth;  // Animate the width
            percentage.textContent = skillWidth;  // Update the percentage text
        }, 300); // 0.3s delay for smooth loading
    });
});
