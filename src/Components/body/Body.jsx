import React from 'react'
import Carrousel from './Carrousel'
import style from './Body.module.css'

const Body = () => {
    return (
        <div className={style.body}>
            <Carrousel/>
        </div>
    )
}

export default Body