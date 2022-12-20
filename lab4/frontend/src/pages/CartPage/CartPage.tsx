import React from "react";
import {useNavigate, NavigateFunction} from "react-router-dom";
import Header from "../../components/Main/Header/Header";
import {getTeasFromCart} from "../../api/cartApi";
import './CartPage.css'
import Menu from "./components/Menu/Menu";
import OrderTea from "../../models/OrderTea";
import CatalogOrder from "./components/CatalogOrder/CatalogOrder";


function CartPage() {
    const navigate: NavigateFunction = useNavigate();
    const [orders, setOrders] = React.useState<OrderTea[]>([]);

    React.useEffect(() => {

            const get_teas_from_cart = async () => {
                const teasData: OrderTea[] | null = await getTeasFromCart(localStorage.getItem("token"));
                if (teasData !== null) {
                    console.log(teasData)
                    setOrders(teasData)
                } else {
                    navigate('/login')
                }

            }
            get_teas_from_cart()
        },
        // eslint-disable-next-line
        []
    );

    return (
        <>
            <Header/>

            <div className="col-12 content">
                <div className="product-title">
                    <div>Корзина</div>
                </div>
                <div className=" order-container">
                    <Menu/>

                    <div className="">
                        <CatalogOrder data={orders}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;