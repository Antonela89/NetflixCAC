import React from 'react'
import ButtonRec from './ButtonRec'
import ButtonsContainer from '../styles/ButtonsContainer'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons'


const Buttons = () => {
    return (
        <ButtonsContainer>
            <ButtonRec icono={faPlay} color='black' background="#FFFFFF60" contenido='Reproducir' style={{marginLeft:"5px"}}/>
            <ButtonRec icono={faCircleInfo} color='white' background="#45454590" contenido ='Más información' style={{marginRight:"5px"}}/>
        </ButtonsContainer>
    )
}

export default Buttons