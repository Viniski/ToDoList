import { Category } from "../types/types.js";

interface Logger {
    logCreationDate: (addition: string) => void;
}

export class TaskClass implements Logger {
    public nameSoUnique: string;
    done: boolean; //domyślnie public
    public category?: Category;

    private createAt: Date;

    constructor(
        name: string,
        done: boolean,
        category: Category = Category.GENEREAL,
    ) {
        this.nameSoUnique = name;
        this.done = done;
        this.category = category;
        this.createAt = new Date();
    }

    public logCreationDate(extra: string) {
        console.log(`Task został stworzony ${this.createAt} ${extra || ""}`);
    }
}

