// Simulate loading project data
document.addEventListener('DOMContentLoaded', function() {
    // Simulating a delay to mimic data loading
    setTimeout(() => {
        // Hide the loader
        document.querySelector('.loader-container').style.display = 'none';

        // Add projects dynamically
        const projects = [
            {
                title: 'Project 1: Portfolio Website',
                description: 'A personal portfolio website showcasing my skills, projects, and achievements.',
                link: 'https://your-portfolio-link.com'
            },
            {
                title: 'Project 2: Task Management App',
                description: 'A web app to manage tasks and track progress with an intuitive UI.',
                link: 'https://your-task-app-link.com'
            },
            {
                title: 'Project 3: E-Commerce Site',
                description: 'An online store built using React, Node.js, and MongoDB for seamless shopping experience.',
                link: 'https://your-e-commerce-link.com'
            }
        ];

        const projectsContainer = document.getElementById('projects');
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }, 2000); // Simulating a 2-second delay
});
