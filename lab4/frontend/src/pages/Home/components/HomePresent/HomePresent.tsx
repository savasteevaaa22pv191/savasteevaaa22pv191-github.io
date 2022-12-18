import React from "react";
import banner from "../../../../images/brand-icon/tea-banner.jpg"
import './HomePresent.css'

function HomePresent() {

    return (
        <>
            <div className="d-flex flex-row home">
                <div className="d-flex col-lg-6 col-md-6 col-sm-12 col-xs-12 justify-content-center align-items-center">
                    <div className="d-flex flex-column col-12">
                        <h1>Чай и кофе</h1>
                        <a>Полный каталог вкусного чая и кофе можно посмотреть здесь</a>
                        <div className="d-inline-block">
                            <button type="button" className="btn btn-dark text-bg-dark button">Узнать
                                подробнее
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-flex col-lg-6 col-md-6 d-md-block d-lg-block">
                    <div className="banner">
                        <img src={banner}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePresent;