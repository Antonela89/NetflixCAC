export const TMDB_API = {
    baseUrl: "https://api.themoviedb.org/3",

    movies: {   //Esto se hace mirando el ENDPOINT en la documentación de la api. 
        // NOTA: Nico dijo que lo dejaba hecho para ahorrarnos el trabajo.
        popular: "/movie/popular",
        topRated: "/movie/top_Rated",
    },

    series: {
        popular: "/tv/popular"
    }
}