import React from "react";
import {useNavigate, NavigateFunction, Link} from "react-router-dom";
import Header from "../../components/Main/Header/Header";
import Footer from "../../components/Main/Footer/Footer";
import Tea from "../../models/Tea";
import {getTeasFromCart} from "../../api/cartApi";
import Order from "./components/Order/Order";
import './CartPage.css'
import Menu from "./components/Menu/Menu";
import tea from "../../models/Tea";

interface Order {
    name: string,
    image: string,
    count: number,
    price: number
}


function CartPage() {
    const navigate: NavigateFunction = useNavigate();
    const [teas, setTeas] = React.useState<Tea[]>([]);
    const order: Order = {
        name: "Шалинь",
        image: "",
        count: 5,
        price: 100
    }

    React.useEffect(() => {

            const get_teas_from_cart = async () => {
                const teasData: Tea[] | null = await getTeasFromCart(localStorage.getItem("token"));
                if (teasData !== null) {
                    setTeas(teasData)
                } else {
                    navigate('/login')
                }

            }
            get_teas_from_cart()
        },

        []
    );

    return (
        <>
            <Header/>

            <div className="col-12">
                <div className="product-title">
                    <div>Корзина</div>
                </div>
                <div className=" order-container">
                    <Menu/>

                    <div className="">
                        <Order order={order}/>
                    </div>
                </div>
            </div>

            <Footer/>

        </>
    );
}

export default CartPage;