import axios from "../../node_modules/axios/index.js"
import apiConf from "./api.conf.js";
import app from '../main'; // import the instance
import {
    TokenService
} from "../services/storage.service";
import store from "../store";

const ApiService = {
    init() {
        axios.defaults.baseURL = apiConf.baseURL;
        axios.defaults.timeout = 10000; //10 sec
        axios.defaults.maxRedirects = 0;
        this.setHeader();
        this.setAuthToken('hl08obl93h1j');
        /**
         * Set default interceptor to modify reponse
         */

    },

    setHeader() {
        axios.defaults.headers.common["Accept"] = "application/json";
        axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    },
    setAuthToken(token) {
        axios.defaults.headers.common["X-eBirdApiToken"] = token;
    },

    get(resource, data = {}) {
        return axios.get(resource, {
            params: data
        });
    },

    // axios.interceptors.response.use(
    //     function (response) {
    //         //TODO: Add global debug storage
    //         //Delete profile propetry if exist
    //         app.$Progress.finish();
    //         if (response.data._profiler) {
    //             delete response.data._profiler;
    //         }
    //         if (response.config.method !== "get" && !response.config.skipmessage) {
    //             let message = (response.data && response.data.message) ? response.data.message : 'Saved success';
    //             if (response.config.successTxt) {
    //                 message = response.config.successTxt;
    //             }
    //             store.commit("lastapimessage/push", {
    //                 message: message,
    //                 type: response.config.method === "post" ? "success" : "info"
    //             });
    //         }
    //         return response;
    //     },
    //     function (error) {
    //         app.$Progress.fail();
    //         let response = error.response;
    //         if (response.headers.status !== 401 && !response.config.skipmessage) {
    //             store.commit("lastapimessage/push", {
    //                 message: response.data.message,
    //                 type: "danger"
    //             });
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    // setHeaderAuth() {
    //     axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`;
    // },
    //
    // removeHeader() {
    //     axios.defaults.headers.common = {};
    // },
    //
    // removeHeaderAuth() {
    //     delete axios.defaults.headers.common["Authorization"];
    // },


    //
    // post(resource, data, successTxt) {
    //     return axios.post(resource, data, {
    //         successTxt: successTxt
    //     });
    // },
    //
    // put(resource, data, successTxt) {
    //     return axios.put(resource, data, {
    //         successTxt: successTxt
    //     });
    // },
    //
    // patch(resource, data, successTxt) {
    //     return axios.patch(resource, data, {
    //         successTxt: successTxt
    //     });
    // },
    //
    // delete(resource, data, successTxt) {
    //     return axios.delete(resource, data, {
    //         successTxt: successTxt
    //     });
    // },
    //
    // /**
    //  * Perform a custom Axios request.
    //  *
    //  * data is an object containing the following properties:
    //  *  - method
    //  *  - url
    //  *  - data ... request payload
    //  *  - auth (optional)
    //  *    - username
    //  *    - password
    //  **/
    // customRequest(data) {
    //     return axios(data);
    // },
    //
    // mount401Interceptor() {
    //     this._401interceptor = axios.interceptors.response.use(
    //         response => {
    //             return response;
    //         },
    //         async error => {
    //             if (error.request.status === 401) {
    //                 if (error.config.url.includes("login/refresh")) {
    //                     // Refresh token has failed. Logout the user
    //                     store.dispatch("user/logout");
    //                     throw error;
    //                 } else {
    //                     // Refresh the access token
    //                     try {
    //                         await store.dispatch("user/refreshToken");
    //                         // Retry the original request
    //                         return this.customRequest({
    //                             method: error.config.method,
    //                             url: error.config.url,
    //                             data: error.config.data
    //                         });
    //                     } catch (e) {
    //                         // Refresh has failed - reject the original request
    //                         throw error;
    //                     }
    //                 }
    //             }
    //             // If error was not 401 just reject as is
    //             throw error;
    //         }
    //     );
    // },
    //
    // unmount401Interceptor() {
    //     // Eject the interceptor
    //     axios.interceptors.response.eject(this._401interceptor);
    // }
};

export default ApiService;