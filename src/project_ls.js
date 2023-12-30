import { Project } from "./project";

export const projectsExists = () => {
    return localStorage.getItem("projects") !== null && localStorage.getItem("projects").length > 0; // is right condition valid?
}

// Adds new project to local storage and displays it in project tab
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
        let projects = JSON.parse(localStorage.getItem("projects"))
        const updatedProjects = projects.filter((proj) => proj.projectName != projectName);
        localStorage.setItem("projects", JSON.stringify(updatedProjects));
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

// Gets a project with the given name
const getProjectWithName = (projectName) => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    return projects.find((proj) => proj.projectName == projectName);
}

// Assigns a todo to a project - given that project exists - and updates local storage
export const assignTodoToProject = (todo, projectName) => {
    const updatedProj = getProjectWithName(projectName);
    Project.addTodo(updatedProj, todo); 
    updateProjectList(updatedProj);
}

// Deletes specific todo from specified project
export const deleteTodo = (projectName, todoTitle) => {
    // Get the project with the name
    const projects = JSON.parse(localStorage.getItem("projects"));
    let project;

    for (const proj of projects) {
        if (proj.projectName == projectName) {
            project = proj;
            break;
        }
    }

    Project.removeTodo(project, todoTitle);
    updateProjectList(project);
}

// Updates lists of projects by changing project with updated one
const updateProjectList = (updatedProject) => {
    const projects = JSON.parse(localStorage.getItem("projects"));

    projects.forEach(proj => {
        if (proj.projectName == updatedProject.projectName) {
            projects[projects.indexOf(proj)] = updatedProject;
        }
    });
    localStorage.setItem("projects", JSON.stringify(projects));
}