import React from 'react'
import style from './styles/Header.module.css'
import Logo from './components/Logo'
import NavItem from './components/NavItem'
import Search from './components/Search'
import Perfiles from './components/Perfiles'
import Notificaciones from './components/Notificaciones'
import Cuenta from './components/Cuenta'

const Header = () => {
    return (
        <header className={style.header}>
            <Logo/>
            <div className={style.navItemContainer} style={{marginLeft:"30px"}}>
                <NavItem nombre='Inicio'/>
                <NavItem nombre='Serie'/>
                <NavItem nombre='Películas'/>
                <NavItem nombre='Novedades Populares'/>
                <NavItem nombre='Mi lista'/>
                <NavItem nombre= 'Explora por idiomas'/>
            </div>
            <div className={style.navItemContainer} style={{width:"300px", justifyContent:"space-between", marginRight:"30px"}}>
                <Search/>
                <Perfiles perfil='Niños'/>
                <Notificaciones/>
                <Cuenta/>
            </div>
        </header>
    );
};

export default Header;