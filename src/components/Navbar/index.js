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


const Navbar = () => {
    
    const[token, setToken, deleteToken] = useCookies(['mr-token']);


const logoutUser = () => {
      console.log("inside logoutUser");
      console.log(token);
      deleteToken(['mr-token']);
      console.log(token);
}
  
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />
            <NavMenu>
            <NavLink to="/ProfileScreen" activeStyle>
                    פרופייל
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
               

                {token['mr-token'] ? (<NavBtn onClick={logoutUser} activeStyle>
                    התנתק
                </NavBtn> ) : <NavLink  to="/Signin" activeStyle>
                    התחבר
                </NavLink>}

                
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;