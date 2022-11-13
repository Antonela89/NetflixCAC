import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Search.module.css'

const Search = () => {
    return (
        <div className={style.search}>
            <FontAwesomeIcon color="white" icon={faMagnifyingGlass}/>
        </div>
    )
}

export default Search