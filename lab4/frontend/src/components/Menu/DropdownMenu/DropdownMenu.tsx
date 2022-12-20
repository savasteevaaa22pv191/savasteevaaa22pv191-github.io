import React from "react";
import gift from '../../../images/dropdown-menu-icon/gift.jpg';
import tea from '../../../images/dropdown-menu-icon/tea.jpg';
import planttea from '../../../images/dropdown-menu-icon/planttea.jpg';
import trava from '../../../images/dropdown-menu-icon/trava.jpg';
import coffee from '../../../images/dropdown-menu-icon/coffe.jpg';
import sladosti from '../../../images/dropdown-menu-icon/sladosti.jpg';
import sirop from '../../../images/dropdown-menu-icon/sirop.jpg';
import posuda from '../../../images/dropdown-menu-icon/posuda.jpg';
import './DropdownMenu.css'

function DropdownMenu() {

    return (
        <>
            <ul className="dropdown-menu" aria-labelledby="dropdownCatalog">
                <div className="row">
                    <ul className="list-inline d-flex flex-row col-12">

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={gift} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Подарки</a>

                                <ul className="list-group list-group-flush list">
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Универсальные подарки</a>
                                </ul>
                            </div>
                        </li>

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={tea} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Чай с добавками</a>

                                <ul className="list-group list-group-flush list">
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Черный чай с добавками</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Зеленый чай с добавками</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Фруктовый чай</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Чай ройбуш</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Гречишный чай</a>
                                </ul>
                            </div>
                        </li>

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={planttea} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Плантационный чай</a>

                                <ul className="list-group list-group-flush list">
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Черный и красный чай</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Зеленый и белый чай</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Улун</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Пуэр</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Японский чай матча</a>
                                </ul>
                            </div>
                        </li>

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={trava} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Травы, иван-чай, матте</a>
                            </div>
                        </li>

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={coffee} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Свежеобжаренный кофе</a>

                                <ul className="list-group list-group-flush list">
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Моносорта арабики</a>
                                    <a className="nav-link" href="src/components/Menu/DropdownMenu/DropdownMenu#">Ароматизированный кофе</a>
                                </ul>
                            </div>
                        </li>

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={sladosti} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Пряности, какао и сладости</a>
                            </div>
                        </li>

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={sirop} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Сиропы</a>
                            </div>
                        </li>

                        <li className="d-flex flex-row col-4 justify-content-center">
                            <div>
                                <img src={posuda} alt="img"/>
                            </div>

                            <div className="item-text d-flex flex-column">
                                <a className="nav-link title" href="src/components/Menu/DropdownMenu/DropdownMenu#">Посуда и акссесуары</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </>
);
}

export default DropdownMenu;