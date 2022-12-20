import React from "react";
import './Product.css'
import Rating from "../../../../components/Card/Rating/Rating";
import Status from "../../../../components/Card/Status/Status";
import Counter from "../Counter/Counter";

function Product(props: any) {

    return (
        <>
            <div className="card card-main">
                <div className="d-flex flex-row row">

                    <div className="d-flex col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="test-wrap d-flex justify-content-center align-items-center product-image">
                            <img src={require(`../../../../images/product-icon-full/${props.tea.image}.jpeg`)} alt="img"/>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-lg-6 col-md-12 col-sm-12 justify-content-start product-content">

                        <div className="d-inline-flex">
                            <Rating rating={props.tea.rating}/>
                        </div>

                        <div className="title">{props.tea.name}</div>
                        <div className="price">{props.tea.price} Р/шт.</div>

                        <Status count={props.tea.number}/>
                        <Counter counter={props.counter}/>

                        <div>
                            <button className="btn btn-dark submit" onClick={evt => props.click(evt)}>В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;