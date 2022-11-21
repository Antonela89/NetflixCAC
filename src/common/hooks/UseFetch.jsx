// import { useEffect, useState } from 'react';

// const useFetch = (service) => {  //En el 99% de las librerías que existen para manejar peticiones aparecen éstos tres estados(resultados, si está cargando y el error):
//     const [data, setData] = useState([]);  //Estados que mantiene el hook useFetch.
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState();



// const getData = async () => {
//     setIsLoading(true);

//     try {
//         const res = await service(); // Acá llamamos al servicio que está en otro archivo(getPopularMovies.js), viene desde afuera. Esta petición me devuelve algo y la respuesta(res) la guarda en el estado(setData(res)), es decir que esto es la respuesta del servicio al hook useFetch.
//         setData(res); // Esto es lo que se setea en el estado.
//         console.log(service);
//     }   catch (error) {
//         setError(error);
//     }   finally{
//         setIsLoading(false);
//     }
// };

// useEffect(() => {
//     getData();
// }, []);

//     return {
//         data,
//         isLoading,
//         error,
//     }

// //  También se podría retornar así:

// //  return [data, isLoading, error]; 
// };

// export default useFetch
import { useEffect, useState } from "react";

const UseFetch = (service) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const getData = async () => {
        setIsLoading(true);
        try {
        const res = await service();
        setData(res);
        console.log(service);
    } catch (error) {
        setError(error);
    } finally {
        setIsLoading(false);
    }
    };

    useEffect(() => {
    getData();
    }, []);

    return {
        data,
        isLoading,
        error,
    };
};

export default UseFetch;