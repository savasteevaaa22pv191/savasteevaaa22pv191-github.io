import React from "react";
import trava from '../../../../images/card-icon/trava.jpg'
import coffee from '../../../../images/card-icon/coffe.jpg'
import tea from '../../../../images/card-icon/tea.jpg'
import present from '../../../../images/card-icon/present.jpg'
import ulun from '../../../../images/card-icon/ulun.jpg'
import tea_with_dopant from '../../../../images/card-icon/tea-with-dopant.jpg'
import './CatalogImgCard.css'

function CatalogImgCard() {

    return (
        <>
            <div>
                <div className="d-flex flex-column col-12">
                    <div className="middle-block d-flex flex-row col-12 flex-wrap">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="back-img">
                                <img src={trava}/>
                                    <div className="caption">Травы и иван-чай</div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="back-img">
                                <img src={ulun}/>
                                    <div className="caption">Улуны</div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="back-img">
                                <img src={coffee}/>
                                    <div className="caption">Кофе</div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="back-img">
                                <img src={tea}/>
                                    <div className="caption">Зеленый чай</div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <div className="back-img">
                                <img src={tea_with_dopant}/>
                                    <div className="caption">Чай с добавками</div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
                            <div className="back-img">
                                <img src={present}/>
                                    <div className="caption">Подарки</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
);
}

export default CatalogImgCard;