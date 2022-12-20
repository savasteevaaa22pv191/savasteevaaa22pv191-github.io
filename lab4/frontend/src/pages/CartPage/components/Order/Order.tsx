import React from "react";
import './Order.css'
import OrderTea from "../../../../models/OrderTea";


function Order(order: OrderTea) {

    return (
        <>

            <div className="flex-row order-box col-12">
                <div className="col-12 d-flex d-inline-box order-menu">
                    <div className="col-2 item">
                        <img className="order-img" src={require(`../../../../images/product-icon/${order.image}.jpg`)} alt="img"/>
                    </div>


                    <div className=" col-4 order-title-box">
                        <div className="d-flex flex-column col-4 order-font">
                            <div>{order.name}</div>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex order-title order-font">
                            <div>{order.price} Р.</div>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex order-font">
                            <div>{order.number} шт.</div>
                        </div>
                    </div>

                    <div className="col-2 item">
                        <div className="d-flex flex-column order-font">
                            <div>{order.price * order.number} Р.</div>
                        </div>
                    </div>
                </div>

            </div>
        </>);
}

export default Order;