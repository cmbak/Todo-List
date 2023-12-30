export class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todos = [];
    }

    // Adds a todo to the project
    static addTodo = (proj, todo) => {
        proj.todos.push(todo);
    }
    // Removes a todo with a given name
    static removeTodo = (proj, name) => {
        proj.todos = proj.todos.filter((name) => name != todoName);
    }
}