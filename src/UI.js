import { createProject, getProjects, projectsExists, checkIfProjectExists, deleteProject } from "./project";

// Should there be a main set project function or?

// Used on first reload to add the projects to the sidebar
export const displayStoredProjects = () => {
    if (projectsExists()) {
        const projects = getProjects();
        // console.log(projects);
    
        clearProjectsTab();

        // TODO HOW TO KNOW WHICH PROJECT IS ACTIVE? LOCAL STORAGE?
        projects.forEach(project => {
            addProjectToTab(project);
        });
    }
}

// Gets rid of all the project HTML (NOT FROM LOCAL STORAGE)
const clearProjectsTab = () => {
    const listOfProjects = document.getElementById("projects");
    while (listOfProjects.firstChild) {
        listOfProjects.removeChild(listOfProjects.firstChild);
    }
}

// Change active project - should be in diff file?

export const changeActiveProject = () => {
    localStorage.setItem("activeProject", document.getElementById("active-project"));
    // console.log(localStorage.getItem("activeProject"));
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

// Cancel project btn
const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", toggleBtnFormVisibility);

// Add project button functionality
const addProjectBtn = document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click", () => {
    const projectName = document.getElementById("project-input").value;
    if (projectName == "") {
        alert("Sorry, please enter a valid project name");
        return false;
    } else if (checkIfProjectExists(projectName)) {
        alert("Sorry, a project with that name already exists!");
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
    const listOfProjects = document.getElementById("projects");
    
    const projectElement = document.createElement("li");
    const projectContainer = document.createElement("div");
    const projectText = document.createTextNode(projectName);
    const deleteBtn = document.createElement("button");

    projectContainer.classList.add('project-container');
    projectElement.appendChild(projectText);
    projectContainer.appendChild(projectElement)
    projectContainer.appendChild(createDeleteProjectForm());

    listOfProjects.appendChild(projectContainer);
}

// Delete project form (fn returns a html form)
const createDeleteProjectForm = (projectName) => {
    const form = document.createElement("form");
    const deleteBtn = document.createElement("button");    
    form.appendChild(deleteBtn);

    deleteBtn.innerText = "Delete";
    deleteBtn.value = projectName;
    deleteBtn.classList.add("delete-project-btn");
    deleteBtn.addEventListener("click", event => {
        event.preventDefault();
        deleteProject(projectName);
        displayStoredProjects();
    });
    return form;
}
// Delete project btn 


displayStoredProjects();