import React from 'react';
import { SectionEvents } from '../EventsSection/EventsSectionStyle';



const SpeakerSection = (props) => {  
    return (
        <SectionEvents>
            {props.children}
        </SectionEvents>
    );
}

export default SpeakerSection;
