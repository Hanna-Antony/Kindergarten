import React,{useRef, useState} from 'react'
import './navbar.css'
import logo from '../../assets/image.png'
import {  Link} from 'react-scroll'
import menui from '../../assets/menubg.png'
import close from '../../assets/clo.png'
const Navbar = () => {
 const [menu,setMenu] = useState("home")
 const menuRef=useRef()
 const openMenu = () =>{
  menuRef.current.style.right='0';
 }
 const closMenu = () =>{
  menuRef.current.style.right='-370px';
 }
  return (
    <div className='navbar'>
        <img src={logo} className='logo' alt=""/>
        <img src={menui} onClick={openMenu} className='men' alt=""/>
        <ul ref={menuRef} className="nav-menu">
          <img src={close} onClick={closMenu} alt="" className='nav-close' />
           <li><Link className='menu' activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
           <li><Link className='menu' activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
           <li><Link className='menu' activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500}>Education</Link></li>
           <li><Link className='menu' activeClass='active' to='teacher' spy={true} smooth={true} offset={-100} duration={500}>Teacher</Link></li>
           {/* <li><Link className='menu' activeClass='active' to='program' spy={true} smooth={true} offset={-100} duration={500}>program</Link></li> */}
           <li><Link className='menu' activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact us</Link></li>
        </ul>
        </div>
  )
}

export default Navbar

