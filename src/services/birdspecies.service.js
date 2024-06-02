import ApiService from "./api.service.js";

const birdspecies = {
    load: async function (birdspecies){
        let response = await ApiService.init().get("product/spplist/PL/",birdspecies);
        console.log("dupa");
        console.log(response);
        return response.data;
    }
}
export default birdspecies;
