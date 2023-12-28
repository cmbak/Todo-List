// import { format } from 'date-fns';

// const currentDate = new Date();
// const formattedDate = format(currentDate, 'MMMM do, yyyy');

// console.log(`The current date is ${formattedDate}`);

// TODO - Add todo button fn
    // TODO - Adds todo to localstorage
    // TODO - Todo should be assigned to a specific project
// TODO - Display todos in project
// TODO - Update todos in view depending on which project is selected


/*
    When someone creates a todo item
    create a new todo for it
    add it to specific project
    local storage!
    display

*/

import { changeActiveProject, toggleCreateProject } from "./UI";
changeActiveProject();
// toggleCreateProject();