import React from "react";
import {useNavigate, NavigateFunction, Link} from "react-router-dom";
import './Description.css'


function Description(props: any) {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="description">
                <div>
                    <div className="title">Описание</div>

                    <div className="content">
                        {props.description}
                    </div>
                </div>

                <div>
                    <div className="title">Характеристики</div>

                    <div className="content">
                        {props.characteristic}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Description;