import { Task, Category } from "./types/types.js";
import { render } from "./helpers/render-tasks.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENEREAL, Category.WORK, Category.GYM, Category.HOBBY];
// const tasks: Task[] = [{
//     title: "Wyrzucić śmieci",
//     done: false,
// },
// {
//     title: "Pójść na siłkę",
//     done: true,
//     category: Category.GYM,
// },
// {
//     title: "Nakarmić koty",
//     done: false,
// },
// ];
// const addTask = (task: Task) => {
//     if (task.title) {
//         tasks.push(task);
//     }
// }
const tasks = [
    new Task("Wyrzucić śmieci", false),
    new Task("Pójść na siłkę", true, Category.GYM),
    new Task("Nakarmić koty", false),
];
const addTask = (task) => {
    if (task.title) {
        tasks.push(task);
    }
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const newTask = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    render(tasks, tasksContainerElement);
});
// type TaskAsTuple = [string, Category, boolean];
// const task: TaskAsTuple = ["zrobić klatę", Category.GYM, true];
// const taskName = task[0];
// const taskCategory = task[1];
// const taskDoneStatus = task[2];
// addTask({ title: taskName, category: taskCategory, done: taskDoneStatus });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
