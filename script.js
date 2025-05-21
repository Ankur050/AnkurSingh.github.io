// Project Data
const projects = [
    {
        title: "Pizza Sales Analysis",
        tools: "SQL, Excel, Power BI",
        description: "Analyzed 10K+ pizza orders to optimize marketing spend.",
        image: "assets/project1.png",
        link: "#"
    },
    {
        title: "Superstore Sales Dashboard",
        tools: "Power BI, DAX",
        description: "Built interactive dashboards for regional sales tracking.",
        image: "assets/project2.png",
        link: "#"
    },
    {
        title: "Amazon Sales Analysis",
        tools: "Python (Pandas, Matplotlib)",
        description: "Uncovered seasonal trends from 50K+ orders.",
        image: "assets/project3.png",
        link: "#"
    },
    {
        title: "Credit Card Fraud Detection",
        tools: "Python (Scikit-learn)",
        description: "ML model with 94% precision in fraud detection.",
        image: "assets/project4.png",
        link: "#"
    }
];

// Load Projects on Homepage
function loadProjects() {
    const projectGrid = document.getElementById('projectGrid');
    if (projectGrid) {
        projects.slice(0, 3).forEach(project => {
            projectGrid.innerHTML += `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p><strong>Tools:</strong> ${project.tools}</p>
                        <p>${project.description}</p>
                        <a href="${project.link}" class="btn">View Project</a>
                    </div>
                </div>
            `;
        });
    }
}

// Load All Projects on Projects Page
function loadAllProjects() {
    const projectList = document.getElementById('projectList');
    if (projectList) {
        projects.forEach(project => {
            projectList.innerHTML += `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p><strong>Tools:</strong> ${project.tools}</p>
                        <p>${project.description}</p>
                        <a href="${project.link}" class="btn">View Details</a>
                    </div>
                </div>
            `;
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadAllProjects();
});
