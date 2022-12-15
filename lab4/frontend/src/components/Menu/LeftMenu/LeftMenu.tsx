import React from "react";
import './LeftMenu.css'

function LeftMenu() {

    return (
        <>
            <div className="left-panel col-md-3">
                <ul className="list-unstyled">
                    <li><a>Подарки</a></li>
                    <li><a>Чай с добавками</a></li>
                    <li><a>Плантационный чай</a></li>
                    <li><a>Травы, иван-чай, мате</a></li>
                    <li><a>Свежеобжаренный кофе</a></li>
                    <li><a>Пряности, какао, сладости</a></li>
                    <li><a>Травы, иван-чай, мате</a></li>
                </ul>
            </div>

        </>
    );
}

export default LeftMenu;