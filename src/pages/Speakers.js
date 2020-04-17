import React from 'react';
import SpeakersCards from '../components/Speakers/SpeakersCard';


const Speakers = () => {  
    return (
        <>
        <h1 className="PageTitle">Sudionici</h1>
        <section className="SectionEvents">
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>               
        </section>
        </>

    );
}

export default Speakers;
