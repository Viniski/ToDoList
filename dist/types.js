// export interface Task {
//     title: string;
//     done: boolean;
//     category?: Category;
// }
export class Task {
    constructor(name, done, category = Category.GENEREAL) {
        this.title = name;
        this.done = done;
        this.category = category;
        this.createAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this.createAt} ${extra || ""}`);
    }
}
export var Category;
(function (Category) {
    Category["GENEREAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
// export type Category = "general" | "work" | "gym" | "hobby"; 
