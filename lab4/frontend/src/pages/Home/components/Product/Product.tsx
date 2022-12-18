import React from "react";
import Tea from "../../../../models/Tea";
import {Link, NavigateFunction, useNavigate} from "react-router-dom";
import './Product.css'
import Rating from "../../../../components/Card/Rating/Rating";
import Status from "../../../../components/Card/Status/Status";

function Product(tea: Tea) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="col-md-6 col-lg-4 mb-3 card card-product" onClick={event => navigate('/product',
                {
                    state: {
                        tea: tea,
                    }
                })}>
                <div className="product-box justify-content-center">
                    <div className="d-inline-flex">
                        <img src={require(`../../../../images/product-icon/${tea.image}.jpg`)}/>
                    </div>

                    <div className="d-inline-flex text-box">
                        <div>{tea.name}</div>
                    </div>

                    <div className="d-inline-flex">
                        <Rating rating={tea.rating}/>
                    </div>

                    <Status count={tea.number}/>

                    <div className="price">{tea.price} Р/ш</div>

                </div>
            </div>
        </>);
}

export default Product;