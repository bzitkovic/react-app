import React from 'react';
import './EventsSection.scss';


const EventsSection = (props) => {  
    return (
        <section className="SectionEvents">
            {props.children}
        </section>
    );
}

export default EventsSection;
