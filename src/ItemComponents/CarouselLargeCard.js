import React from 'react'
import StarRatings from 'react-star-ratings';
import {Button} from 'react-bootstrap';

export default function CarouselLargeCard(props) {
    return (
        <div className="carousel-card--large bg-light"
            onClick={() => {window.location.href = `/casino-review/${props.casino.id}`}}
        >
            <img src={props.casino.acf.logo} width="150" alt="casino logo"/>
            <StarRatings
                rating={parseFloat(props.casino.acf.rating)}
                starDimension="30px"
                starSpacing="5px"
                starRatedColor="rgb(255, 194, 0)"
            />
            <div>
                <strong className="pr-3">bonus</strong>
                <h5 className="d-inline">
                    <strong className="text-primary">{props.casino.acf.bonus} EUR</strong>
                </h5>
            </div>
            <div>
                <strong className="pr-3">freespins</strong>
                <h5 className="d-inline">
                    <strong className="text-primary">{props.casino.acf.freespins}</strong>
                </h5>
            </div>
            <Button variant="primary">Play Now!</Button>
        </div>
    )
}
