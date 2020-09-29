import React from 'react'
import { useViewport } from '../Hooks/useViewport';
import CarouselSmallCard from "../ItemComponents/CarouselSmallCard";
import CarouselLargeCard from "../ItemComponents/CarouselLargeCard";

export default function CarouselCard(props) {
    const { width } = useViewport();
    const breakpoint = 1250;

    let content;

    switch(props.type){
        case "large":
            content = <CarouselLargeCard casino={props.casino} /> 
            break;
        case "small":
            if( width > breakpoint){
                content = <CarouselSmallCard casino={props.casino} />
            } else {
                content = "";
            }
            
            break;
        default:
            content = "";
    }
    return (
        <div className={`position-relative text-align-center ${props.type==="large"?"d-flex justify-content-center flex-grow-1":" "}`}>
            {content}
        </div>
    )
}
