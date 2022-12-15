import React from "react";
import './TopMenu.css'

function TopMenu() {

    return (
        <>
            <div>
                <ul className="nav top-block">
                    <li className="nav-item active-item">
                        <a className="nav-link" aria-current="page" href="#">Хит</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Советуем</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Новинки</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Акции</a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default TopMenu;