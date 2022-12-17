import React from "react";
import {useNavigate, NavigateFunction, Link} from "react-router-dom";
import "./Card.css"
import image from '../../../images/product-icon-full/tovar.jpg'
import Counter from "../Counter/Counter";
import Status from "../Status/Status";
import Price from "../Price/Price";
import Rating from "../Rating/Rating";
import LeftMenu from "../../Menu/LeftMenu/LeftMenu";
import Tea from "../../../models/Product";

function Card(tea: Tea) {
    const basePath = '../../../images/product-icon/'
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="card card-main">
                <div className="d-flex flex-row row">

                    <div className="d-flex col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="test-wrap d-flex justify-content-center align-items-center product-image">
                            <img src={image}/>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-lg-6 col-md-12 col-sm-12 justify-content-start product-content">

                        {/*<Rating v-bind:rating=product.rating></Rating>*/}

                        <div className="title">Шаулинь</div>
                        <div className="price">720 Р/ш</div>

                        {/*<Status v-bind:status=product.status></Status>

                        <Counter></Counter>*/}

                        <div>
                            <button className="btn btn-dark submit">В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;