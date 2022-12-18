import React from "react";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import './Order.css'
import image from '../../../../images/product-icon/tovar1.jpg'
import Tea from "../../../../models/Tea";
import Status from "../../../../components/Card/Status/Status";
import Rating from "../../../../components/Card/Rating/Rating";

function Order(order: any) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="flex-row">
                <div className="col-12 d-flex d-inline-box">
                    <div className="col-2">
                        <img className="order-img" src={image}/>
                    </div>


                    <div className="d-flex col-4 justify-content-center align-items-center">
                        <div className="d-flex flex-column col-12">
                            <a>Чай и кофе</a>
                        </div>
                    </div>

                    <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column col-12">
                            <a>500 К</a>
                        </div>
                    </div>

                    <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column col-12">
                            <a>5 шт.</a>
                        </div>
                    </div>


                    <div className="d-flex col-2 justify-content-center align-items-center">
                        <div className="d-flex flex-column col-12">
                            <a>1200 К</a>
                        </div>
                    </div>
                </div>

            </div>
        </>);
}

export default Order;