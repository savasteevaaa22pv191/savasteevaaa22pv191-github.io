import React from "react";
import TopNavbar from "../../Navbar/TopNavbar/TopNavbar";
import CatalogNavbar from "../../Navbar/CatalogNavbar";

function Header() {
    return (
        <>
        <header>
            <TopNavbar/>

            <CatalogNavbar/>
        </header>
        </>
    )

}

export default Header;