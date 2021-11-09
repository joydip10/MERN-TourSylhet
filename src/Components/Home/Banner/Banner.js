import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="container px-5">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/44bLRLF/slider1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>"Sylhet- the spiritual capital of Bangladesh"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/R2rtGdH/slider2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>"Sylhet- the heaven of Haor and Baor"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/PNmJ23b/slider3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>"Sylhet- Kingdom of hilly tracts and Tea gardens"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/b7nyJm7/slider4.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>"Sylhet- Meghalaya is not too far"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/6PMBDRF/slider5.jpg"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>"Sylhet- Enjoy Explore and make memories"</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;