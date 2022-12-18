import React from "react";
import logo from '../../../images/brand-icon/tea_logo.png';
import cart from '../../../images/navbar-icon/cart.svg';
import heart from '../../../images/navbar-icon/heart.svg';
import lock from '../../../images/navbar-icon/lock.svg';
import { useNavigate, NavigateFunction, Link } from "react-router-dom";
import "./TopNavbar.css"

function TopNavbar() {
    const navigate: NavigateFunction = useNavigate();
    let linkToCart: string = '/login';
    if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
        linkToCart = '/cart';
    }

    return (
        <>
            <nav className="nav navbar-expand-lg container top-navbar">
                <div className="navbar-brand img-wrap">
                    <img className="img-icon" src={logo} onClick={event => navigate('/')}/>
                </div>

                <div className="col-md-5 col-lg-5 search-wrap search">
                    <form className="form-check-inline" role="search">
                        <div className="input-group">
                            <input className="form-control search-input" type="text" placeholder="Поиск"/>
                            <button className="btn btn-outline-secondary" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="col-lg-5 col-md-5 d-flex flex-row justify-content-end align-items-center">
                    <div className="container d-flex flex-row align-items-center ">
                        <div className="d-flex flex-column col-6 d-none d-lg-block call">
                            <div className="d-flex align-bottom"><b>+7-950-477-23-74</b></div>
                            <div>Заказать звонок</div>
                        </div>

                        <div className="col-6 d-flex flex-row justify-content-around">
                            <img className="img-icon" src={lock} onClick={event => navigate('/login')}/>


                            <img className="img-icon" src={heart}/>


                            <img className="img-icon" src={cart} onClick={event => navigate(linkToCart)}/>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default TopNavbar;