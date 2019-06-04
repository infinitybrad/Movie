import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "4a2c55d5e9b8887b8fff1ea18e693f86",
        language: "en-US"
    }
});

export const movieApi ={
    nowPlaying:()=>api.get("movie/now_playing"),
    upcoming:()=>api.get("movie/upcoming"),
    popular:()=>api.get("movie/popular"),
    movieDetail:id =>
        api.get(`movie/${id}`,{
            params:{
                append_to_response:"videos"
            }
        }),
    search:term=>
        api.get("search/movie",{
            params:{
                query:encodeURIComponent(term)
            }
        })
};

export const tvApi ={
    getAiringThisWeek:()=>api.get("tv/top_rated"),
    popular:()=>api.get("tv/popular"),
    airingToday:()=>api.get("tv/airing_today"),
    showDetail:id=>
        api.get(`tv/${id}`,{
            params:{
                append_to_response:"videos"
            }
        }),
    search:term=>
        api.get("search/tv",{
            params:{
                query:encodeURIComponent(term)
            }
        })

};

