import React, { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

//check if the user logged in
const Navbar = () => {
    
    const[token, setToken] = useCookies(['mr-token']);
    const[navBar, setNavBar ] = useState('התחבר');

   useEffect(() =>{
    setNavBar('התנתק')
}, [token])
  
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />
            <NavMenu>
            <NavLink to="/Signin" activeStyle>
                    התחברות
                </NavLink> 
            <NavLink to="/ProjectsScreen" activeStyle>
                    פרויקטים
                </NavLink> 
                <NavLink to="/CoursesScreen" activeStyle>
                    קורסים
                </NavLink>
                <NavLink to="/HomeScreen" activeStyle>
                    דף הבית
                </NavLink>
               
                <NavLink  to="/Signin" activeStyle>
                {navBar}
                </NavLink>
                {/* <NavLink to="/Signin" activeStyle>
                    התנתק
                </NavLink> */}
                
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;