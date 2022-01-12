import Category from "./category";
import Tag from "./tag";

export default class PetToAdd {
    category: Category;
    name: string;
    photoUrls: string[];
    tags: Tag[];
    status: "available" | "sold" | "pending";

    constructor(category: Category, name: string, photoUrls: string[], tags: Tag[], status: "available" | "sold" | "pending") {
        this.category = category;
        this.name = name;
        this.photoUrls = photoUrls;
        this.tags = tags;
        this.status = status;
    }

    static async createDefaultPet() {
        let category = new Category(25, "default category");
        let firstTag = new Tag(25, "First Custom Tag");
        let secondTag = new Tag(27, "Second Custom Tag");
        let photoUrls = ["https://dmarket.com/blog/best-dota2-wallpapers/dota2logo_hu63a418b03843b39b133100730abc88ee_104613_1920x1080_resize_q75_lanczos.jpg",
            "https://dmarket.com/blog/best-dota2-wallpapers/dota-2-wallpapers-invoker-dark-artsitry_hu2b9f37a952268d90694843d83f8c4f13_444148_1920x1080_resize_q75_lanczos.jpg"
        ];

        return new PetToAdd(category, "Custom Serhii Pet", photoUrls, [firstTag, secondTag], "available");
    }
}