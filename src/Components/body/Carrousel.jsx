import React from 'react'
import Card from './Card'
import Title from './Title'
import style from './Carrousel.module.css'

const Carrousel = () => {
    return (
        <div className={style.carrousel}>
            <Title/>
            <div className={style.lista}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </div>
    ) 
}

export default Carrousel