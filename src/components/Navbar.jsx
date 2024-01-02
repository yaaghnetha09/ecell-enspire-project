import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'

import './Navbar.css'
import Logo from '../images/logo.png'

import React from 'react'



const Navbar = () => {
    return (
       <nav>
           <div className="container nav_container">
               <Link to="/" className='logo'>
                 <img src={Logo} alt="Nav Logo" />
               </Link>
               <ul className='nav_links'>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''
                            } onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
               </ul>
               
           </div>
       </nav>
    )
}

export default Navbar