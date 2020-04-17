import React from 'react';
import './EventsTitle.scss';


const EventsTitle = (props) => {  
    return (
        <h1 className="PageTitle"> {props.children} </h1>
    );
}

export default EventsTitle;
