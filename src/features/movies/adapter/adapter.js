//Este es el ADAPTADOR, que no es más que un map, que toma los datos que me da la api(movie.id, movie.title, movie.overview, etc) y me genera un objeto nuevo con los nombres que yo voy a utilizar en la vista (id, name, description, date, etc). Es decir que adaptamos la respuesta a lo que nosotros realmente queremos(seleccionamos los datos que nos sirven o lo que nos interesa) de la respuesta de la api. 

import { TMDB } from "../../../config/TMDB";

//El adaptador es simplemente una función que va a recibir el array de objetos o el objeto que queremos adaptar(en nuestro caso, nuestra DATA son movies), que lo que hace es mapear ese array y devolver el objeto que nosotros necesitamos para trabajar(retorna la respuesta del map, que recorrió cada elemento, que en este caso una película y retorna a su vez específicamente el objeto que necesito: quiero que cada película tenga el id, el name, una descripción, etc):

export const moviesAdapter = (movies) => { 
    return movies.map((movie) => {
    return {
        id: movie.id,
        name: movie.title,
        description: movie.overview,
        date: movie.release_date,
        poster: TMDB.images.poster.high + movie.poster_path,
        backdrop: TMDB.images.bsckdrop.high + movie.backdrop_path,
        rating: movie.vote_average,
        };
    });
};

// En caso que solamente reciba un objeto solo(UNA película) en lugar de un array (como en el caso de arriba) sería lo mismo pero directamente retornamos el objeto que queremos crear:

// const adapter = (movie) => {
//     return {
//         id: movie.id,
//         name: movie.title,
//         description: movie.overview,
//         date: movie.release_date,
//         poster: TMDB.images.poster_high + movie.poster_path,
//         //backdrop: movie.backdrop_path, //Forma número 1
//         backdrop: TMDB.images.backdrop_high + movie.backdrop_path, //Forma número 2
//         rating: movie.vote_average,      
//     };
// };
// console.log(adapter);


// Por cada elemento(película) que tiene el array películas le aplicamos el adaptador y eso es lo que va a retornar:

// const adapterMovies = (movies) => {
//     return movies.map(adapter);
// };
// console.log(adapterMovies);