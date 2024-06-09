import ApiService from "./api.service.js";

const birdlist = {
    load: async function () {
        try {
            let response = await ApiService.init().get("product/spplist/PL",[]);
            console.log("Response:", response);
            return response.data;
        } catch (error) {
            console.error("Error loading bird list:", error);
            throw error;
        }
    }
};

export default birdlist;
