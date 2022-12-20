import React from "react";
import './Menu.css'

function Menu() {

    return (
        <>
            <div className="flex-row">
                <div className="col-12 d-flex d-inline-box order-menu">
                    <div className="col-6 item">
                        Товары
                    </div>


                    <div className=" col-2 item">
                        <div className="d-flex flex-column col-2">
                            Цена
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex flex-column col-2">
                            Количество
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex flex-column col-2">
                            Сумма
                        </div>
                    </div>
                </div>

            </div>
        </>);
}

export default Menu;