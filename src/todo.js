import { assignTodoToProject } from "./project_ls";

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false; // Needed?
    }

    // FIXME prototypes instead?

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    isCompleted() {
        return this.completed;
    }

    // Will setters be used at any point?
}

export const createTodo = (form, projectName) => {
    const formData = new FormData(form);
    const todo = new Todo(formData.get('title'), formData.get('desc'), formData.get('due-date'), formData.get('priority'));
    assignTodoToProject(todo, projectName);
}