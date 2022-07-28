import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
   return (
    <div className={"navbar"}>
        <NavLink
            className={"link"}
            to={"allAddresses"}
        >
            All Addresses   
        </NavLink>

        <NavLink
            className={"link"}
            to={"addAddress"}
        >
        Add Address 
        </NavLink>

    </div>
   );
}

export default NavBar;