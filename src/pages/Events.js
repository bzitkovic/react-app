import React, { useState, useEffect } from 'react';
import TimeIcon from '../assets/images/time-icon.png'
import LocationIcon from '../assets/images/location-icon.png';
import EventsSection from '../components/EventsSection/EventsSection';
import EventsTitle from '../components/EventsTitle/EventsTitle';
import EventsCard from '../components/Events/EventsCard';
import eventsMockData from '../lib/events';
import LoaderCompo from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';

import { getEvents } from '../components/api/events';


const Events = () => {
    const authToken = localStorage.getItem('token');
    const [events, setEvents] = useState([]);
    const [eventsCopy, setEventsCopy] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getEvents(authToken).then(res => {
                setEvents(res.events);
            })
        }, 1000);
        

        const results = events.filter(person => person.title.toLowerCase().includes(searchTerm));
        if(results.length > 0){
            setEventsCopy(results);
        } else{
            getEvents(authToken).then(res => {
                setEventsCopy(res.events);
            })
        }

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const ShowEvents = () => {
        return eventsCopy.map((event, index) => (
            <EventsCard
                key = {index}
                type = "events"
                imageLocation = {LocationIcon}
                altLocation = "location-image"
                imageTime = {TimeIcon}
                altTime = "time-image"
                title = {event.title}
                location = {event.location}
                dateTime = {event.dateTime}
                about = {event.about}
            />
        ))
    }
    return (
        <>
        <EventsTitle> Događanja </EventsTitle>
        {events == "" ? <SearchBar active={true} placeholder={"Search events . . ."} value={searchTerm} change={handleChange} /> : <SearchBar active={false} placeholder={"Search events . . ."} value={searchTerm} change={handleChange} /> }
        <EventsSection>
            {events == "" ? <LoaderCompo/> : ShowEvents()}   
        </EventsSection>
        </>
    );
}

export default Events;