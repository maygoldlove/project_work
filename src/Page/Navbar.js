import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css'; 
import { IconContext } from 'react-icons/lib'; 
export default function Navbar() {

  const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  return (

    
  <div>
    <IconContext.Provider value={{color: 'black', size:30,}}>
      <div className="navbar">

      <Link to="#" className='menu-bars'>
        <FaIcons.FaBars  onClick={showSidebar}/>
      </Link>
      <Link to="/" className='nav-img'>
        <img src="\nav bar\Desktop Logo.png" alt="nav"/>
      </Link>
      <div className="search-icons">
        <img src="\nav bar\search.png" alt="search-icons" />
       <Link to="/Cart"> <img src="\nav bar\shopping-bag.png" alt =""/> </Link>
      </div>
      </div>
      </IconContext.Provider>


      <IconContext.Provider value={{color: '#26ABEA', size:30,}}>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'  onClick={showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
          <AiIcons.AiOutlineClose />
          </Link>
          </li> 
          
          {SidebarData.map((item, index) => { 
            return(
              
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
       
      </nav>
      </IconContext.Provider>

     
    </div>
  )
}
