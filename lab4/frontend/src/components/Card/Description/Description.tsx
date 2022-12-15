import React from "react";
import {useNavigate, NavigateFunction, Link} from "react-router-dom";
import './Description.css'


function Description() {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="description">
                <div>
                    <div className="title">Описание</div>

                    <div className="content">
                        Тут какой-то текст
                        {/*<div v-for="text in description">
                            <div>{{text}}</div>
                        </div>*/}
                    </div>
                </div>

                <div>
                    <div className="title">Характеристики</div>

                    <div className="content">
                        Тут какой-то текст
                        {/*<div v-for="text in character">
                            <div>{{text}}</div>
                        </div>*/}
                    </div>
                </div>

            </div>

        </>
    );
}

export default Description;