// Gets todos from local storage for a given project
export const getProjectTodos = (projectName) => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    let todos;
    projects.forEach(project => {
        if (project.projectName == projectName) {
            todos = project.todos;
        }
    });
    return todos;
}