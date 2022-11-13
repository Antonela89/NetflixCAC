import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Notificaciones.module.css'

const Notificaciones = () => {
  return (
    <div className={style.notificaciones}>
      <FontAwesomeIcon color="white" icon={faBell}/>
    </div>
  )
}

export default Notificaciones