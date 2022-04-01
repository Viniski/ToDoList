export class Task {
    public title: string;
    public done: boolean;
    public category?: Category;

    constructor(
        name: string,
        done: boolean,
        category: Category = Category.GENEREAL,
    ) {
        this.title = name;
        this.done = done;
        this.category = category;
    }
}

export enum Category {
    GENEREAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
}