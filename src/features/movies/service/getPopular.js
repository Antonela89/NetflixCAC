// import axios from "axios"; //Axios es una librería que se instala: npm install axios
import { TMDB } from "../../../config/TMDB"; 
import { moviesAdapter } from "../adapter/adapter";
// import {ENV} from "../../../config/ENV "

//Este es el archivo que aloja al servicio

// const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;//Esto ya NO DEBE ESTAR ACÁ, de esta forma.

export const getPopularMovies = async (page = 1) => {  //Acá creo la función y en el try de mi custom hook useFetch la ejecuto(const res = await service();).
//  const res = await axios();
//  const res = await axios(url, {timeout:3000}); 
    const res = await TMDB.api.get(TMDB.paths.movies.popular, {//Esta es la COMUNICACIÓN CON LA API.
    params: {
        page,
    },
});

    // console.log(res.data.results[0]);  //  Esta es la respuesta de la api, donde nuetra data son películas.

    // const adapted = moviesAdapter(res.data.results); //Esta es la devolución del adaptador(adapter) al servicio.
    
    // console.log(adapted[0])  // Esta sería la respuesta adaptada, la que me da el adaptador.
    
    //Por DEFECTO axios es axios.get(aunque no le coloquemos el método(const res = await axios.get(url);))

    //En el segundo parámetro que es un objeto, podemos pasarle el tiempo en que la petición se rechazaría.
    return moviesAdapter(res.data.results);
};


// Axios viene con una propiedad que se llama create, esto nos permite encapsular determinadas configuraciones que va a tener la api para simplificarnos las cosas, entonces no tenemos que estar configurando todo cada vez que querramos usar la api como hicimos arriba:

// export const getPopularMovies = async () => {const res = await axios(url, {timeout:3000});  return res.data.results;}

// export const TMDB_API = axios.create({  
//     baseURL: 'https://api.themoviedb.org/3',
//     params:{
//         api_key: ENV.REACT_APP_API_KEY,
//         language: 'es-ES',
//         page: 1
//     }
// });

//  De esta manera nunca más vamos a repetir y usar esto así:

// const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

//La primera parte de la dirección es la url BASE (hasta el número 3 que es la versión), después vienen los ENDPOINTS y luego el signo de pregunta que indica que a partir de él vienen QueryParams(como language y page, que son variables con su valor), que están separados por ampersand(&) y que pueden ser configurados en la propiedad params del objeto  axios, como lo hicimos arriba.


//Exporto la configuración y cuando yo quiera usar la api coloco TMDB_API punto( y como ya configuré la api me aparecen los métodos para usar) y yo le paso la url sólo de lo que quiero:

// TMDB_API.get('/movie/popular');

// Y si yo quiero hacer otra petición sólo cambio ese pedacito:

// TMDB_API.get('/tv/popular');

// Lo mismo que hicimos en este archivo para pedir las películas hay que hacerlo con las series!! Y ademá traer las pelis y series mejor puntuadas,por ejemplo, donde solo habría que cambiar esto:

// const res = await TMDB.api.get(TMDB.paths.movies.popular);

//  por esto: 

// const res = await TMDB.api.get(TMDB.paths.movies.top_Rated);