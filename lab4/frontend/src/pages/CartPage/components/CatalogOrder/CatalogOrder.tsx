import React from "react";
import OrderTea from "../../../../models/OrderTea";
import Order from "../Order/Order";


interface OrdersData {
    data: OrderTea[]
}

function CatalogProduct(orders: OrdersData) {
    const cardComponents: JSX.Element[] = orders.data.map<JSX.Element>(order => <Order key={order.id} {...order} />);

    return (
        <>
            <div className="flex-column col-12">
                <div className="d-flex flex-column col-12">
                    {cardComponents}
                </div>
            </div>
        </>
    );
}

export default CatalogProduct;