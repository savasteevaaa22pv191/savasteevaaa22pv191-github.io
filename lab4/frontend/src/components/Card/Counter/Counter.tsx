import React, {useState} from "react";

function Counter(props: any) {

    return (
        <>
            <div className="d-flex">

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-4 col-xs-4 col-md-5 col-lg-5">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <button className="btn btn-dark btn-sm" id="minus-btn"><i
                                        className="fa fa-minus" onClick={props.counter.decrement}></i></button>
                                </div>
                                <input type="number" id="count_input"
                                       className="form-control form-control-sm" value={props.counter.count}/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-dark btn-sm"><i
                                        className="fa fa-plus" onClick={props.counter.increment}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Counter;