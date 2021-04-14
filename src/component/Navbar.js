import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../image/logo.png';
import './Navbar.css'
import { AlignCenter, XCircle } from 'react-feather';
// import {LinksInfo} from '../Info/LinksInfo'
const Navbar = (props) => {

    const [click, setClick] = useState(false);
    const clickHandli =() => setClick(!click)
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='nav-logo'>
                    <img className='logo' src ={logo}/>
                </div>
                {console.log(props.links)}
                <div className='links ' >
                    <ul className={click? 'nav-menu active' : 'nav-menu'}>
                        {/* <li className='nav--link'><NavLink exact to='/'>Home</NavLink></li>
                        <li className='nav--link'><NavLink to='/services'>Services</NavLink></li>
                        <li className='nav--link'><NavLink to='/portfolio'>Portfolio</NavLink></li>
                        <li className='nav--link'><NavLink to='/about'>About</NavLink></li>
                        <li className='nav--link'><NavLink to='contact'>Contact</NavLink></li> */}
                        {props.links.map((link, index) => {
                            return(
                                <li className={link.cLink} key={link.id}><NavLink exact to={link.host}>{link.name}</NavLink></li>
                            )
                        })}
                    </ul>
                </div>
                <div className='icon' onClick={clickHandli}>
                    {click? <XCircle/> : <AlignCenter/>}
                </div>
            </div>
        </div>
    )
}

export default Navbar
