import React from "react";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import image from '../../../images/product-icon/tovar3.jpg'
import './Product.css'
import Tea from "../../../../models/Tea";
import Status from "../../../../components/Card/Status/Status";
import Rating from "../../../../components/Card/Rating/Rating";

function Product(tea: Tea) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="col-md-6 col-lg-4 mb-3 card card-product" onClick={event => navigate('/product',
                {
                    state: {
                        tea: tea,
                    }})}>
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
}

export default Product;