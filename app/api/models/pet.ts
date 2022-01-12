import Category from "./category";
import PetToAdd from "./pet_to_add";
import Tag from "./tag";

export default class Pet extends PetToAdd {
    readonly id: number;

    constructor(id: number, category: Category, name: string, photoUrls: string[], tags: Tag[], status: "available" | "sold" | "pending") {
        super(category, name, photoUrls, tags, status);
        this.id = id;
    }
}