import React from 'react'
import ButtonCircContainer from '../styles/ButtonCircContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonCirc = ({icono, color, background, contenido}) => {
    return (
        <ButtonCircContainer background = {background}>
            <FontAwesomeIcon style={{ width:"25px", height:"25px"}} color={color} icon={icono}/>
        </ButtonCircContainer>
    )
}

export default ButtonCirc
