import * as chai from 'chai';
import chaiExclude from 'chai-exclude';
import PetController from "../../app/api/controllers/pet.controller";
import PetToAdd from "../../app/api/models/pet_to_add";
chai.use(chaiExclude);

const petController = new PetController();

describe('User can', () => {

    it('get pet by the id', async () => {
        let retrievedPet = await petController.getPetById(1);
        chai.expect(retrievedPet.id).to.be.equal(1);
    })

    it('user can add, update and delete pet', async () => {

        let petToAdd = await PetToAdd.createDefaultPet();

        let addedPet = await petController.addPet(petToAdd);
        chai.expect(addedPet).excluding("id").to.deep.equal(petToAdd, "Added pet should be equal to the initially created pet object");

        let retrievedPet = await petController.getPetById(addedPet.id)
        chai.expect(retrievedPet).to.deep.equal(addedPet, "Retrieved pet should be equal to the added pet.");

        let updatedPetName = "Updated Super Puper Name";
        addedPet.name = updatedPetName;

        let updatedPet = await petController.updatePet(addedPet);
        chai.expect(updatedPet.name).to.deep.equal(updatedPetName, "Pet's name should be updated");

        let deleteResponse = await petController.deletePet(updatedPet.id);
        chai.expect(parseInt(deleteResponse.message)).to.eql(updatedPet.id, "Value of the message property should be equal to the id of the removed pet");
        chai.expect(parseInt(deleteResponse.code)).to.eql(200, "Status code of the successful DELETE call should be 200");
    })
})