import React from "react";
import Tea from "../../../models/Product";
import Product from "../../Home/Product/Product";

interface TeasData {
    data: Tea[]
}

function CatalogProduct(teas: TeasData) {
    console.log(teas)
    const cardComponents: JSX.Element[] = teas.data.map<JSX.Element>(tea => <Product key={tea.id} {...tea} />);

    return (
        <>
            <div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row flex-wrap">
                        {cardComponents}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogProduct;