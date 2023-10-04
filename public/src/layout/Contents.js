import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

import Slide from '../component/Slide'
import Ani from '../component/Ani'
import Event from '../component/Event'
import About from '../component/About'
import Review from '../component/Review'
import EventBanner from '../component/EventBanner'
import Form from '../component/Form'
import Button from '../component/Button'

function Contents(props) {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div id={props.id}>
            <Slide id="slide" info={props.info}></Slide>
            <Ani id="ani" info={props.info}></Ani>
            <EventBanner id="MEventBanner" info={props.info}></EventBanner>
            <Review id="review" info={props.info}></Review>
            <Event id="event" info={props.info}></Event>
            <About id="about" info={props.info}></About>
            <Form id="form" info={props.info}></Form>
            <Button id="button"></Button>
        </div>
    );
}

export default Contents;