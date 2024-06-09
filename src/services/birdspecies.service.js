import ApiService from "./api.service.js";

const birdspecies = {
    load: async function (speciesArray) {
        const species = speciesArray.join(',');
        const params = {
            species: species,
            locale: 'pl',
            fmt: 'json'
        };

        let response = await ApiService.init().get("ref/taxonomy/ebird", params);

        return response.data;
    }
};

export default birdspecies;
