import React from "react";
import './TopMenu.css'

function TopMenu() {

    return (
        <>
            <div>
                <ul className="nav top-block">
                    <li className="nav-item active-item">
                        <a className="nav-link" aria-current="page" href="src/pages/Home/components/TopMenu/TopMenu#">Хит</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="src/pages/Home/components/TopMenu/TopMenu#">Советуем</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="src/pages/Home/components/TopMenu/TopMenu#">Новинки</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="src/pages/Home/components/TopMenu/TopMenu#">Акции</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default TopMenu;