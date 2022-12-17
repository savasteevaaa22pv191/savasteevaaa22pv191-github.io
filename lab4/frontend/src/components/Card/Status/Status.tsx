import React from "react";
import './Status.css'

function Status(props: any) {

    function renderName() {
        return props.count > 0 ? "Достаточно" : "Нет в наличии"
    }

    function renderIcon() {
        if (props.count > 0) {
            return <i className="fa fa-check check-color"></i>
        } else {
            return <i className="fa fa-times"></i>
        }
    }

    return (
        <>
            <div className="d-inline-block status">
                {renderIcon()}
                {renderName()}
            </div>

        </>
    );
}

export default Status;