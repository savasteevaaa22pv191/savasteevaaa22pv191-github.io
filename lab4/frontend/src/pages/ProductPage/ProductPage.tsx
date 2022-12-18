import React from "react";
import './ProductPage.css'
import {useNavigate, NavigateFunction, Link, useLocation} from "react-router-dom";
import LeftMenu from "../../components/Menu/LeftMenu/LeftMenu";
import Description from "./components/Description/Description";
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";
import Product from "./components/Product/Product";
import {authentication, registration} from "../../api/authApi";
import Tea from "../../models/Tea";
import {addToCart, getTeasFromCart} from "../../api/cartApi";


function ProductPage(props: any) {
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const response: any = await addToCart(location.state.tea.id, 2);
        if (response !== null) {
            alert("Товар добавлен в корзину")
        } else {
            navigate('/login')
        }
    };

    return (
        <>
            <Header/>

            <div>
                <div className="product-title">
                    {location.state.tea.name}
                </div>

                <div className="container d-flex flex-row mt-2 row">
                    <LeftMenu/>

                    <div className="content d-flex flex-column col-md-9">
                        <Product tea={location.state.tea} click={handleSubmit}/>

                        <Description description={location.state.tea.description}
                                     characteristic={location.state.tea.characteristic}/>
                    </div>

                </div>
            </div>

            <Footer/>
        </>
    );
}

export default ProductPage;