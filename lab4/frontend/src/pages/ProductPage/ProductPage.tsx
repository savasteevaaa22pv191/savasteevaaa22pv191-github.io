import React from "react";
import './ProductPage.css'
import {useNavigate, NavigateFunction, Link} from "react-router-dom";
import LeftMenu from "../../components/Menu/LeftMenu/LeftMenu";
import Description from "../../components/Card/Description/Description";
import Card from "../../components/Card/Product/Card";
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";

function ProductPage() {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <Header></Header>

            <div>
                <div className="product-title">
                    <div>Шаулинь</div>
                </div>

                <div className="container d-flex flex-row mt-2 row">
                    <LeftMenu></LeftMenu>

                    <div className="content d-flex flex-column col-md-9">
                        <Card></Card>
                        <Description></Description>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default ProductPage;