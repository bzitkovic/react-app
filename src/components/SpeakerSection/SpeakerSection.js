import React from 'react';
import './SpeakerSection.scss';


const SpeakerSection = (props) => {  
    return (
        <section className="SectionEvents">
            {props.children};
        </section>
    );
}

export default SpeakerSection;
