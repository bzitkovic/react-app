import React from 'react';
import  { Title } from './SpeakersTitleStyle.js';


const SpeakerTitle = (props) => {  
    return (
        <Title> {props.children} </Title>
    );
}

export default SpeakerTitle;
