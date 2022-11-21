// API_KEY: 

// En este archivo se hacen las importaciones de las variables de entorno creadas en el archivo .env, entonces tenemos todas las variables más a mano, como buena práctica se suele hacer esto así no hay que estar importando todo el tiempo y ya tenemos la referencia a mano(importamos el objeto y ya tenemos dentro lo que necesitemos):

export const ENV = {
    MODE: process.env.REACT_APP_MODE,
    TMDB_API_KEY: process.env.REACT_APP_API_KEY
};

