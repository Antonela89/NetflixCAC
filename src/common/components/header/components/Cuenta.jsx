import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Cuenta.module.css'

const Cuenta = () => {
    return (
        <div className={style.cuenta}>
            <img src="https://avatarfiles.alphacoders.com/243/thumb-1920-243485.jpg" alt="imagen perfil" className={style.img} />
            <FontAwesomeIcon className={style.icono} icon={faCaretDown}  />
        </div>
    )
}

export default Cuenta