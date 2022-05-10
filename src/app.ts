import { Task, Category } from "./types.js";
import { render } from "./render-tasks.helper.js";
import { renderCategories } from "./render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [Category.GENEREAL, Category.WORK, Category.GYM, Category.HOBBY];

const tasks: Task[] = [
    new Task("Wyrzucić śmieci", false),
    new Task("Pójść na siłkę", true, Category.GYM),
    new Task("Nakarmić koty", false),
];

const addTask = (task: Task) => {
    if (task.title) {
        tasks.push(task);
    }
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}

addButtonElement.addEventListener("click", (event: Event) => {
    event.preventDefault();
    const newTask: Task = new Task(taskNameInputElement.value, false, selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    render(tasks, tasksContainerElement);
})

renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
render(tasks, tasksContainerElement);
