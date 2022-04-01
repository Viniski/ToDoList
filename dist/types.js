export class Task {
    constructor(name, done, category = Category.GENEREAL) {
        this.title = name;
        this.done = done;
        this.category = category;
    }
}
export var Category;
(function (Category) {
    Category["GENEREAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
