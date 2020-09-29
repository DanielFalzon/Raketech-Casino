import React from 'react'
import Carousel from './Carousel'

function HomeBanner() {
    return (
        <div className="w-100 bg-dark d-flex justify-content-around align-items-center flex-md-row flex-column text-center" style={{ height: "395px" }}>
            <h1 className="font-weight-bolder text-white">Our top casinos.</h1>
            <Carousel prop="test" />
        </div>
    )
}

export default HomeBanner
