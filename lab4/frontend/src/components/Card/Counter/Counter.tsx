import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(1);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="d-flex">

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-4 col-xs-4 col-md-5 col-lg-5">
                            <div className="input-group mb-4">
                                <div className="input-group-prepend">
                                    <button className="btn btn-dark btn-sm" id="minus-btn"><i
                                        className="fa fa-minus" onClick={decrement}></i></button>
                                </div>
                                <input type="number" id="count_input"
                                       className="form-control form-control-sm" value={count}/>
                                <div className="input-group-prepend">
                                    <button className="btn btn-dark btn-sm"><i
                                        className="fa fa-plus" onClick={increment}></i></button>
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