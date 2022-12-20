import React from "react";
import Header from '../../components/Main/Header/Header';
import LeftMenu from "../../components/Menu/LeftMenu/LeftMenu";
import HomePresent from "./components/HomePresent/HomePresent";
import CatalogImgCard from "./components/CatalogImgCard/CatalogImgCard";
import TopMenu from "./components/TopMenu/TopMenu";
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;
import Tea from "../../models/Tea";
import {getTeas} from "../../api/productApi";
import CatalogProduct from "./components/CatalogProduct/CatalogProduct";
import Footer from "../../components/Main/Footer/Footer";

function Home() {
    const basePath = '../../images/product-icon/'
    const [teas, setTeas] = React.useState<Tea[]>([]);

    console.log(teas)

    React.useEffect(() => {

            const get_teas = async () => {
                const teasData: Tea[] | null = await getTeas();
                if(teasData !== null){
                    setTeas(teasData)
                }

            }
            get_teas()
        },

        []
    );

    return (
        <>
            <Header />
            <div className="container d-flex flex-row mt-2 row">
                <LeftMenu/>

                <div className="content d-flex flex-column col-md-9">
                    <HomePresent/>

                    <CatalogImgCard/>


                    <div className="d-flex flex-column">
                        <TopMenu/>
                        <CatalogProduct data={teas}/>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;