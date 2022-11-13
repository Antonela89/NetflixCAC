import React from 'react'
import style from '../styles/Perfiles.module.css'

const Perfiles = ({perfil}) => {
    return (
        <h5 className={style.perfil}>{perfil}</h5>
    )
}

export default Perfiles