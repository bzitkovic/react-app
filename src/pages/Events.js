import React from 'react';
import TimeIcon from '../assets/images/time-icon.png'
import LocationIcon from '../assets/images/location-icon.png';
import EventsSection from '../components/EventsSection/EventsSection';
import EventsTitle from '../components/EventsTitle/EventsTitle';
import EventsCard from '../components/Events/EventsCard';

const Events = () => {
    return (
        <>
        <EventsTitle> Događanja </EventsTitle>
        <EventsSection>
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
            <EventsCard imageLocation = {LocationIcon} altLocation = "location-image" imageTime = {TimeIcon} altTime = "time-iamge" ></EventsCard>  
        </EventsSection>

        </>

    );
}

export default Events;