import { NavLink } from "react-router-dom";
import './menu.scss'

interface MenuProps {
    linkMenu: {
        name: string
        href: string
    }[]
}
export default function Menu({linkMenu} : MenuProps) {
    return (
        <div className="menu">
            <div className="menu-top">
                <div className="menu-logo">
                    <img src="/logo-talkify.png" alt="Logo Talk" />
                </div>
                <div className="menu-search">
                    <button className="btn btn-icon"><i className="icon-search"></i></button>
                    <button className="btn btn-icon"><i className="icon-profil"></i></button>
                </div>
            </div>
            <div className="menu-bottom">
                <ul className="navMenu">
                {linkMenu.map((link, index) => {
                    const isActive = location.pathname === link.href || (location.pathname === '/' && index === 0)  
                    return (
                        <li key={link.name}>
                            <NavLink
                                className={isActive ? 'cntNav-link active' : 'cntNav-link'}
                                to={link.href}
                                title={link.name+' page'}>
                                {link.name}
                            </NavLink>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}