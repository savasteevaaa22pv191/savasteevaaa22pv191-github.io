import React from "react";
import Tea from "../../../models/Product";
import {NavigateFunction, useNavigate} from "react-router-dom";
import image from '../../../images/product-icon/tovar3.jpg'
import './Product.css'
import Rating from "../../Card/Rating/Rating";
import Status from "../../Card/Status/Status";

function Product(tea: Tea) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="col-md-6 col-lg-4 mb-3 card card-product">
                <div className="product-box justify-content-center">
                    <div className="d-inline-flex">
                        <img src={require(`../../../images/product-icon/${tea.image}`)}/>
                    </div>

                    <div className="d-inline-flex text-box">
                        <div>{tea.name}</div>
                    </div>

                    <div className="d-inline-flex">
                        <Rating rating={tea.rating}/>
                    </div>

                    <Status count={4}/>

                    <div className="price">{tea.price} Р/ш</div>

                </div>
            </div>
        </>);
    /*<>
        <div className="flex-row">
            <div className="card card-product col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="product-box justify-content-center">
                    <div className="d-inline-flex">
                        <img src={image}/>
                    </div>

                    <div className="d-inline-flex text-box">
                        <div>{tea.name}</div>
                    </div>
                    <Rating rating={3}/>
                    <Rating v-bind:rating=rating></Rating>
            <Status v-bind:status="status"></Status>

                    <Price v-bind:price="price"></Price>


                </div>
            </div>
        </div>
    </>
);*/
}

export default Product;