var ApiService  = require("./api.service.js");

const birdlist = {
    load: async function () {
        try {
            let response = await ApiService.init().get("product/spplist/PL");
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = birdlist
