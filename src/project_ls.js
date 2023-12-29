import { Project } from "./project";

export const projectsExists = () => {
    return localStorage.getItem("projects") !== null;
}

// Adds new project to local storage and displays it in project tab

// TODO CHANGE THIS SO THAT PROJECTS HAS AN ARRAY OF PROJECT OBJECTS!

export const createProject = projectName => {
    if (!projectsExists()) {
        localStorage.setItem("projects", JSON.stringify([new Project(projectName)]));
    } else {
        let updatedProjectArr = JSON.parse(localStorage.getItem("projects"));
        updatedProjectArr.push(new Project(projectName));
        localStorage.setItem("projects", JSON.stringify(updatedProjectArr));
    }
}

// Returns an array of the names of each project
export const getProjects = () => {
    if (projectsExists()) {
        const projects = JSON.parse(localStorage.getItem("projects"));
        const projectNames = projects.map((proj) => proj.projectName);
        return projectNames;
    }
}

// Returns true/false depending on whether a project with a given name is exists
export const checkIfProjectExists = (projectName) => {
    if (projectsExists()) {
        return getProjects().includes(projectName);
    }
    return false;
}

// Deletes a specified project from local storage
export const deleteProject = (projectName) => {
    if(projectsExists()) {
        let projects = getProjects();
        const index = projects.indexOf(projectName);
        projects.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
    }
}

// Stores given project name as the active project
export const storeActiveProject = (projectName) => {
    localStorage.setItem("activeProject", projectName);
}

// Gets the active project from local storage
export const getActiveProject = () => {
    return localStorage.getItem("activeProject");
}

// Assigns a todo to a project - given that project exists
export const assignTodoToProject = (todo, projectName) => {
    // could create own project object thing?
    // has name of project
    // and array of todos
}