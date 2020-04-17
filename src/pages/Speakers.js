import React from 'react';
import SpeakerSection from '../components/SpeakerSection/SpeakerSection';
import SpeakersTitle from '../components/SpeakersTitle/SpeakersTitle';
import SpeakersCards from '../components/Speakers/SpeakersCard';


const Speakers = () => {  
    return (
        <>
       <SpeakersTitle> Sudionici </SpeakersTitle>
        <SpeakerSection>
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>   
            <SpeakersCards></SpeakersCards>               
        </SpeakerSection>
        </>

    );
}

export default Speakers;
