import React from "react";

function Counter() {

    return (
        <>
            <div className="d-flex">

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-4 col-xs-4 col-md-5 col-lg-5">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <button className="btn btn-dark btn-sm" id="minus-btn" ><i
                                        className="fa fa-minus"></i></button>
                                </div>
                                <input className="counter-input form-control form-control-sm" type="number" id="count_input"
                                        value="1" min="1">
                                    <div className="input-group-prepend">
                                        <button className="btn btn-dark btn-sm"  id="plus-btn"><i
                                            className="fa fa-plus"></i></button>
                                    </div>
                                </input>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
);
}

export default Counter;