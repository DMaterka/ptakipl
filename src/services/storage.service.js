const TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

function getStorageNames(remember) {
    if (remember === true) {
        return {
            set: "localStorage",
            unset: "sessionStorage"
        };
    } else {
        return {
            set: "sessionStorage",
            unset: "localStorage"
        };
    }
}
/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
    },

    saveToken(accessToken, remember = false) {
        let storageName = getStorageNames(remember);
        window[storageName.set].setItem(TOKEN_KEY, accessToken);
        window[storageName.unset].removeItem(TOKEN_KEY);
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY) || sessionStorage.getItem(REFRESH_TOKEN_KEY);
    },

    saveRefreshToken(refreshToken, remember = false) {
        let storageName = getStorageNames(remember);
        window[storageName.set].setItem(REFRESH_TOKEN_KEY, refreshToken);
        window[storageName.unset].removeItem(REFRESH_TOKEN_KEY);
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    }
};

export { TokenService };
