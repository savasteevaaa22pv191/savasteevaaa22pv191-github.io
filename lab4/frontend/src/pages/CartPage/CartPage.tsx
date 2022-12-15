import React from "react";
import {useNavigate, NavigateFunction, Link} from "react-router-dom";
import Header from "../../components/Main/Header/Header";
import LeftMenu from "../../components/Menu/LeftMenu/LeftMenu";
import Card from "../../components/Card/Product/Card";
import Description from "../../components/Card/Description/Description";
import Footer from "../../components/Main/Footer/Footer";


function CartPage() {
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
                    </div>

                </div>
            </div>

            <Footer></Footer>

        </>
    );
}

export default CartPage;