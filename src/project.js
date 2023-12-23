// Adds new project to local storage and displays it in project tab
export const createProject = projectName => {
    if (localStorage.getItem("projects") === null) {
        localStorage.setItem("projects", JSON.stringify([projectName]));
    } else {
        let updatedProjectArr = JSON.parse(localStorage.getItem("projects"));
        updatedProjectArr.push(projectName);
        localStorage.setItem("projects", JSON.stringify(updatedProjectArr));
    }
}