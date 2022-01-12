import got from "got";
import { BASE_API_URL } from '../../../config/base-config'
import Pet from "../models/pet";
import PetToAdd from "../models/pet_to_add";

export default class PetController {
    private path: string = "/pet"

    async getPetById(id: number) {
        let response = await got(`${BASE_API_URL}${this.path}/${id}`);

        return JSON.parse(response.body);
    }

    async addPet(pet: PetToAdd): Promise<Pet> {
        let respone = await got.post(`${BASE_API_URL}${this.path}`, {
            json: pet
        });

        return JSON.parse(respone.body);
    }

    async updatePet(pet: Pet): Promise<Pet> {
        let respone = await got.put(`${BASE_API_URL}${this.path}`, {
            json: pet
        });

        return JSON.parse(respone.body);
    }

    async deletePet(petId: number){
        let response = await got.delete(`${BASE_API_URL}${this.path}/${petId}`);

        return JSON.parse(response.body);
    }
}