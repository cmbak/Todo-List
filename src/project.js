export const projectsExists = () => {
    return localStorage.getItem("projects") !== null;
}

// Adds new project to local storage and displays it in project tab
export const createProject = projectName => {
    if (!projectsExists()) {
        localStorage.setItem("projects", JSON.stringify([projectName]));
    } else {
        let updatedProjectArr = JSON.parse(localStorage.getItem("projects"));
        updatedProjectArr.push(projectName);
        localStorage.setItem("projects", JSON.stringify(updatedProjectArr));
    }
}

// Returns an array of the names of each project
export const getProjects = () => {
    if (projectsExists()) {
        return JSON.parse(localStorage.getItem("projects"));
    }
}

// Returns true/false depending on whether a project with a given name is exists
export const checkIfProjectExists = (projectName) => {
    if (projectsExists()) {
        return getProjects().includes(projectName);
    }
    return false;
}