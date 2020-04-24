import React from 'react';
import { SectionEvents } from './EventsSectionStyle.js';


const EventsSection = (props) => {  
    return (
        <SectionEvents>
            {props.children}
        </SectionEvents>
    );
}

export default EventsSection;
