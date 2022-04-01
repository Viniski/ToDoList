import { Task, Category } from "./types.js";
import { render } from "./render-tasks.helper.js";
import { renderCategories } from "./render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [Category.GENEREAL, Category.WORK, Category.GYM, Category.HOBBY];
const tasks = [
    new Task("Bieganie", true, Category.GYM),
    new Task("Sprzątanie", false),
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
    render(tasks, tasksContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
