import React from 'react'
import StarRatings from 'react-star-ratings';

export default function CarouselSmallCard(props) {
    return (
        <div className="bg-light carousel-card--small">
            <img src={props.casino.acf.logo} className="pb-2" width="120px" alt="logo"/>

            <StarRatings
                rating={parseFloat(props.casino.acf.rating)}
                starDimension="20px"
                starSpacing="2px"
                starRatedColor="rgb(255, 194, 0)"
                
            />

        </div>
    )
}
