import { Category } from "../types.js";
export class TaskClass {
    constructor(name, done, category = Category.GENEREAL) {
        this.nameSoUnique = name;
        this.done = done;
        this.category = category;
        this.createAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this.createAt} ${extra || ""}`);
    }
}
