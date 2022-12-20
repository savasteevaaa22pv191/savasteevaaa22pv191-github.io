import React from "react";
import './Rating.css'
import {Star} from "./Star";

function Rating(props: any) {
    let stars: JSX.Element[] = [];
    for(let i =0; i < 5;i++){
        stars[i] = <Star color={''}/>
    }
    if(props.rating !==-1){
        for(let i =0; i < props.rating;i++){
            stars[i] = <Star color={'rating-color'}/>
        }
    }
    return (
        <>
            {stars}
        </>
    );
}

export default Rating;