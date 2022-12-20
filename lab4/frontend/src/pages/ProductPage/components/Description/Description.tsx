import React from "react";
import './Description.css'


function Description(props: any) {

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