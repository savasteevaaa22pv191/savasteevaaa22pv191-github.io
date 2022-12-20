import React from "react";

export function Star(props: any){
    return (
        <>
            <div className="d-inline-block">
                <i className={`fa fa-star ${props.color}`}></i>
            </div>
        </>
    )
}