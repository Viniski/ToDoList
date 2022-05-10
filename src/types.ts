// export interface Task {
//     title: string;
//     done: boolean;
//     category?: Category;
// }

export class Task {
    public title: string;
    done: boolean; //domyślnie public
    public category?: Category;

    private createAt: Date;

    constructor(
        name: string,
        done: boolean,
        category: Category = Category.GENEREAL,
    ) {
        this.title = name;
        this.done = done;
        this.category = category;
        this.createAt = new Date();
    }

    public logCreationDate(extra: string) {
        console.log(`Task został stworzony ${this.createAt} ${extra || ""}`);
    }
}

export enum Category {
    GENEREAL = "general",
    WORK = "work",
    GYM = "gym",
    HOBBY = "hobby",
}

// export type Category = "general" | "work" | "gym" | "hobby"; 