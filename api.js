import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "4a2c55d5e9b8887b8fff1ea18e693f86",
        language: "en-US"
    }
});

export default api;