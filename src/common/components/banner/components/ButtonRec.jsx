import React from 'react'
import {ButtonRecContainer} from '../styles/ButtonRecContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonRec = ({icono, color, background, contenido}) => {
    return (
        <ButtonRecContainer background={background}>
                <FontAwesomeIcon style={{ width:"25px", height:"25px"}} color={color} icon={icono}/>
                <h3 style={{color:color, fontSize:"18px", marginLeft:"10px"}}>{contenido}</h3>
        </ButtonRecContainer>
    )
}

export default ButtonRec