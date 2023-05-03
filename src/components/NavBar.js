import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    const barStyle = {
        display: "inline-block",
        width: "100px",
        fontSize: "14px",
        padding: "4px",
        margin: "0 6px 6px",
        background: "rgb(25, 100, 35)",
        color: "white",      
    };

    return (
        <div>
            <NavLink
                to="/"
                exact
                style={barStyle}
            >Home</NavLink>
            <NavLink
                to="/parents"
                exact
                style={barStyle}
            >Parent List</NavLink>

        </div>
    )
}

export default NavBar;