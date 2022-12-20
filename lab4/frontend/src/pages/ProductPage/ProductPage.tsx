import React from "react";
import './ProductPage.css'
import {useNavigate, NavigateFunction, useLocation} from "react-router-dom";
import LeftMenu from "../../components/Menu/LeftMenu/LeftMenu";
import Description from "./components/Description/Description";
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";
import Product from "./components/Product/Product";
import {addToCart} from "../../api/cartApi";

interface CounterParams {
    count: number,
    increment: (evt:any)=>void,
    decrement: (evt:any)=>void
}

function ProductPage(props: any) {
    const navigate: NavigateFunction = useNavigate();
    const location = useLocation();
    const [count, setCount] = React.useState<number>(1);

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        console.log(location.state.tea.number)

        if (count > location.state.tea.number) {
            alert("Недостаточно товаров")
        } else {
            const response: any = await addToCart(location.state.tea.id, count);
            if (response !== null) {
                alert("Товар добавлен в корзину")
            } else {
                navigate('/login')
            }
        }
    };

    const handleIncrement = (event: any) => {
        event.preventDefault()
        setCount(count + 1)
    }

    const handleDecrement = (event: any) => {
        event.preventDefault()
        if (count > 1) {
            setCount(count + 1)
        }
    }

    const params: CounterParams = {
        count: count,
        increment: handleIncrement,
        decrement: handleDecrement
    }

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
                        <Product tea={location.state.tea} click={handleSubmit} counter={params}/>

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