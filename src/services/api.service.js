import axios from "../../node_modules/axios/dist/esm/axios.js";
import apiConf from "./api.conf.js";

const ApiService = {
    init() {
        axios.defaults.baseURL = apiConf.baseURL;
        axios.defaults.timeout = 10000; // 10 sec
        axios.defaults.maxRedirects = 0;
        this.setAuthToken('hl08obl93h1j');
        this.setHeader();
        return this;
    },

    setHeader() {
        axios.defaults.headers.common["Accept"] = "application/json";
        axios.defaults.headers.common['X-eBirdApiToken'] = this.getAuthToken();
    },

    setAuthToken(token) {
        this.authToken = token;
    },

    getAuthToken() {
        return this.authToken;
    },

    get(resource, data = {}) {
        return axios.get(resource, {
            params: data
        });
    },

    // Other methods here...
};

export default ApiService;
