import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import style from "./index.module.css"

function CarouselComponent() {
    return (
        <Carousel >
            <Carousel.Item interval={1000} className={style.li}>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;

