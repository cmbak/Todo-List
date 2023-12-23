import { createProject, getProjects } from "./project";

// Should there be a main set project function or?


// Change active project - should be in diff file?

export const changeActiveProject = () => {
    localStorage.setItem("activeProject", document.getElementById("active-project"));
    console.log(localStorage.getItem("activeProject"));
}


// Toggles the visibility of the create project button and project form
function toggleBtnFormVisibility() {
    toggleCreateProject();
    displayProjectForm();
}

// Create project button events

const createProjectBtn = document.getElementById("create-project-btn");
createProjectBtn.addEventListener("click", toggleBtnFormVisibility)


// Display the form for creating a project
export const toggleCreateProject = () => {
    createProjectBtn.classList.toggle("hidden");
}

// Display add project form
export const displayProjectForm = () => { // TODO rename to toggle
    const addProjectForm = document.getElementById("add-project-form");
    addProjectForm.classList.toggle("hidden");
    // Make sure input is empty once hidden
    document.getElementById("project-input").value = "";
};

const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", toggleBtnFormVisibility);

// Add project button functionality
const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
    const projectName = document.getElementById("project-input").value;
    if (projectName == "") {
        alert("Sorry, please enter a valid project name");
        return false;
    }
    toggleBtnFormVisibility();
    createProject(projectName);
    addProjectToTab(projectName);
    // updateProjectsList();
});

// Project tab functionality

// Adds project to project tab
const addProjectToTab = projectName => {
    const projectList = document.getElementById("project-list");
    
    const projectElement = document.createElement("li");
    const projectText = document.createTextNode(projectName);

    projectElement.appendChild(projectText);
    projectList.insertBefore(projectElement, createProjectBtn);
}

// clears the projects from the tab
const clearProjects = () => {
    const projectList = document.getElementById("project-list");
    projectList.replaceChildren();
}


// Loop over all the projects in local storage
// add each to dom
// if empty, untitled project

// const updateProjectsList = () => {
//     const projectList = document.getElementById("project-list");
    
//     clearProjects();
//     // TODO HOW TO WORK OUT ACTIVE PROJECT?
//     let projects = getProjects();
//     projects.forEach(project => {
//         projectList.appendChild(project)
//         console.log(project);
//     });
// }

