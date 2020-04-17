import React from 'react';
import './SpeakersTitle.scss';


const SpeakerTitle = (props) => {  
    return (
        <h1 className="PageTitle"> {props.children} </h1>
    );
}

export default SpeakerTitle;
