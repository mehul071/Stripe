import React from 'react'
import logo from './images/logo.svg'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from '../Context'

const Navbar = () => {
  const {openSidebar,opensubmenu,closesubmenu} = useGlobalContext();
  const displaySubmenu = (e) =>{
    const page = e.target.textContent;
    const tempbtn = e.target.getBoundingClientRect()
    const center = (tempbtn.left + tempbtn.right)/2;
    const bottom = tempbtn.bottom -3;
    opensubmenu(page,{center,bottom});
  }
  const handlesubmenu =(e) =>{
    if(!e.target.classList.contains('link-btn'))
    {
      closesubmenu();
    }
  }
  return (
    <nav className="nav" onMouseOver={handlesubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
            </li>
        </ul>
        <button className="btn sign-in">Sign-in</button>
      </div>
    </nav>
  )
}

export default Navbar