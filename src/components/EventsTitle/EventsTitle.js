import React from 'react';
import { PageTitle } from './EventsTitleStyle.js';


const EventsTitle = (props) => {  
    return (
        <PageTitle> {props.children} </PageTitle>
    );
}

export default EventsTitle;
