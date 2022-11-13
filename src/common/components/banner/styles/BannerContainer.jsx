import styled from 'styled-components'; //Forma de importar.

//Instalar libreria Styled-components  npm i styled-components
//El styled-components me permite estilizar un determinado componente para reutilizarlo, por ejemplo esto es el styled de un div. En lugar de ponerle al div la props style y llenar el componente de css, englobamos el estilo en un componente de estilos. La ventaja que tenemos es que no salimos de JavaScript, si bien esto es código de css está en un archivo de javascript, no es necesario crear un archivo css y además nos permite pasarle props(mandar desde afuera del componente parámetros por props)

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;

    background-color: ${(props) => props.color}; //Como background le estoy mandando una imagen, ideal para lo que necesito en el banner del proyecto Netflix.

// Acá arriba declaré un background-color y le mando (a través de un callback) una props llamada color, entonces en mi componente de estilo(BannerContainer), que es un div, ubicado en el componente Banner.jsx, yo le mando el parámetro color con el color('black') que quiero que sea el fondo.

    height: 90vh;
    width: 100%;
    background: url( ${(props) => props.image} );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    
    &:before {
    z-index: -1;
    content: ""; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        rgba(16, 16, 16, 1) 0%,
        rgba(16, 16, 16, 0) 10%,
        rgba(16, 16, 16, 0) 60%,
        rgba(16, 16, 16, 1) 100%,
        );
};
`;

BannerContainer.defaultProps = {//Esto indica que si no le mando ningún parámetro de color en el BannerContainer, por defecto le digo que sea blanco, le indico el parámetro inicial que va a tener.
    color: "black",
    image: "",
} 

//El nombre de la constante va con mayúscula porque es un COMPONENTE. Se coloca la palabra styled punto el elemento que quiero estilizar(a, button, etc), en este caso un div y a continución se abren basticks y dentro se coloca el código CSS ORIGINAL, NO se usa camelCase como cuando lo usamos en el componente directament(ver ejemplo en Banner.jsx).

//Usando el estilo de esta manera nunca se sale de archivos JavaScript.

//Esto me crea un componente, entonces en Banner.jsx, en lugar del div voy a colocar BannerContainer como una etiqueta que envuelve a los componentes y cumple la función que antes tenía el div, pero me permite tener el estilo encapsulado en un componente de estilo.

// La gracia de styled-components se ve cuando tenemos que pasar cosas como parámetros, por ejemplo pasar props:
// export const BannerContainer = styled.div`
//     height: 80vh;
//     width: 100%;
//     background-color: ${(props) => props.color}; como parámetro le mando el color(ver en archivo Banner.jsx la etiqueta BannerContainer con la propiedad color).
// `