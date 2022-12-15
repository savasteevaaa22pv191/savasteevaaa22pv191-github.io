import React from "react";
import DropdownMenu from "../Menu/DropdownMenu/DropdownMenu";

function CatalogNavbar() {

    return (
        <>
            <nav className="nav navbar-expand-lg py-2 navbar-dark bg-dark text-bg-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="#navbarSupportedContent">
                    <ul className="navbar-nav justify-content-between container">
                        <li className="nav-item dropdown col-2">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownCatalog" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Каталог
                            </a>

                            <DropdownMenu/>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-text" href="#">О компании</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-text" href="#">Акции</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-text" href="#">Корпоративные подарки</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link menu-text" href="#">Заказ и доставка</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link menu-text" href="#">Оптовикам</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default CatalogNavbar;