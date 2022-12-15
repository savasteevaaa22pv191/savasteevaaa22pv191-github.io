import React from "react";
import Header from '../../components/Main/Header/Header';
import LeftMenu from "../../components/Menu/LeftMenu/LeftMenu";
import HomePresent from "../../components/Home/HomePresent/HomePresent";
import CatalogImgCard from "../../components/Catalog/CatalogImgCard/CatalogImgCard";
import TopMenu from "../../components/Menu/TopMenu/TopMenu";

function Home() {

    return (
        <>
            <Header />
            <div className="container d-flex flex-row mt-2 row">
                <LeftMenu></LeftMenu>

                <div className="content d-flex flex-column col-md-9">
                    <HomePresent></HomePresent>

                    <CatalogImgCard></CatalogImgCard>


                    <div className="d-flex flex-column">
                        <TopMenu></TopMenu>
                        {/*<CatalogProduct></CatalogProduct>*/}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;