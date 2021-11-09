import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Banner from './Banner/Banner';
import SingleEvent from './SingleEvent';
import HotelsAndRestaurants from './HotelsAndRestaurants';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:500/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
            })
        fetch('http://localhost:500/hotels')
            .then(res => res.json())
            .then(data => {
                setHotels(data);
            })
        fetch('http://localhost:500/restaurants')
            .then(res => res.json())
            .then(data => {
                setRestaurants(data);
            })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h2 className="mt-4 mb-4">Book some of the <span className="text-warning">finest tour places</span></h2>
            <div className="container px-5">
                {
                    (events.length === 0) &&
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                }
                {
                    (events.length !== 0) &&
                    <Row xs={1} md={3} className="g-4">
                        {
                            events.map(event => <SingleEvent key={event._id} event={event} />)
                        }
                    </Row>
                }
            </div>
            <h2 className="mt-4 mb-4">Get discount upto 40% on <span className="text-warning">these staying places</span></h2>
            <div className="container px-5">
                {
                    (hotels.length === 0) &&
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                }
                {
                    (hotels.length !== 0) &&
                    <Row xs={1} md={4} className="g-4">
                        {
                            hotels.map(hotel => <HotelsAndRestaurants key={hotel._id} service={hotel} />)
                        }
                    </Row>
                }
            </div>

            <h2 className="mt-4 mb-4">Enjoy the <span className="text-warning">local cuisines</span></h2>
            <div className="container px-5">
                {
                    (restaurants.length === 0) &&
                    <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                }
                {
                    (restaurants.length !== 0) &&
                    <Row xs={1} md={4} className="g-4">
                        {
                            restaurants.map(restaurant => <HotelsAndRestaurants key={restaurant._id} service={restaurant} />)
                        }
                    </Row>
                }
            </div>
        </div>
    );
};

export default Home;