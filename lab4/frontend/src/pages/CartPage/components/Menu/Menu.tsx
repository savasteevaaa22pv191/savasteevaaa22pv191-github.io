import React from "react";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import './Menu.css'
import image from '../../../../images/product-icon/tovar1.jpg'

function Menu(order: any) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="flex-row">
                <div className="col-12 d-flex d-inline-box order-menu">
                    <div className="col-6 item">
                        Товары
                    </div>


                    <div className=" col-2 item">
                        <div className="d-flex flex-column col-2">
                            <a>Цена</a>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex flex-column col-2">
                            <a>Количество</a>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex flex-column col-2">
                            <a>Сумма</a>
                        </div>
                    </div>
                </div>

            </div>
        </>);
}

export default Menu;