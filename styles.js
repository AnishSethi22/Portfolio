document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('response').innerText = 'Thank you for your message, ' + name + '!';
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        document.getElementById('response').innerText = 'Please fill out all fields.';
    }
});

// JavaScript to detect when the skill bars come into view and trigger the animation
window.addEventListener('scroll', function() {
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect();
        const skillPercentage = skill.getAttribute('data-percentage');
        
        if (skillPosition.top < window.innerHeight && skillPosition.bottom >= 0) {
            // Add in-view class to trigger animation
            skill.classList.add('in-view');

            // Dynamically set the width of the bar based on the proficiency
            const barFill = skill.querySelector('.bar-fill');
            barFill.style.setProperty('--skill-width', `${skillPercentage}%`);
        } else {
            // Remove in-view class if the skill is out of view
            skill.classList.remove('in-view');
        }
    });
});
