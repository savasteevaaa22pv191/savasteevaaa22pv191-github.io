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
                            <div className="nav-link dropdown-toggle" id="dropdownCatalog" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Каталог
                            </div>

                            <DropdownMenu/>

                        </li>

                        <li className="nav-item">
                            <div className="nav-link menu-text">О компании</div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link menu-text" >Акции</div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link menu-text">Корпоративные подарки</div>
                        </li>

                        <li className="nav-item">
                            <div className="nav-link menu-text">Заказ и доставка</div>
                        </li>

                        <li className="nav-item dropdown">
                            <div className="nav-link menu-text">Оптовикам</div>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default CatalogNavbar;