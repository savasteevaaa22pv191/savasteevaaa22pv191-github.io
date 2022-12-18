import React from "react";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import './Order.css'
import image from '../../../../images/product-icon/tovar1.jpg'
import Tea from "../../../../models/Tea";
import Status from "../../../../components/Card/Status/Status";
import Rating from "../../../../components/Card/Rating/Rating";
import OrderTea from "../../../../models/OrderTea";


function Order(order: OrderTea) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>

            <div className="flex-row order-box col-12">
                <div className="col-12 d-flex d-inline-box order-menu">
                    <div className="col-2 item">
                        <img className="order-img" src={require(`../../../../images/product-icon/${order.image}.jpg`)}/>
                    </div>


                    <div className=" col-4 order-title-box">
                        <div className="d-flex flex-column col-4 order-font">
                            <a>{order.name}</a>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex order-title order-font">
                            <a>{order.price} Р.</a>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex order-font">
                            <a>{order.number} шт.</a>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex flex-column order-font">
                            <a>{order.price * order.number} Р.</a>
                        </div>
                    </div>
                </div>

            </div>
        </>);
}

export default Order;