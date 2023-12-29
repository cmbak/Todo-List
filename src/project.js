export class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todos = [];
    }

    getProjectName() {
        return this.projectName;
    }

    getTodos() {
        return this.todos;
    }

    // Adds a todo
    addTodo(todo) {
        this.todos.push(todo);
        // should this return todos?
    }

    // Removes a todo with a given name
    removeTodo(todoName) {
        this.todos = this.todos.filter((name) => name != todoName);
        // should this return todos?
    }
}