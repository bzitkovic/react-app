import React from 'react';
import TimeIcon from '../assets/images/time-icon.png'
import LocationIcon from '../assets/images/location-icon.png';
import EventsCard from '../components/Events/EventsCard';

const Events = () => {
    return (
        <>
        <h1 className="PageTitle">Događanja</h1>
        <section className="SectionEvents">
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
        </section>

        </>

    );
}

export default Events;