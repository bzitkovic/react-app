import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import SpeakerSection from '../components/SpeakerSection/SpeakerSection';
import SpeakersTitle from '../components/SpeakersTitle/SpeakersTitle';
import SpeakersCards from '../components/Speakers/SpeakersCard';
import speakersMockData from '../lib/speakers';
import SearchBar from '../components/SearchBar/SearchBar';

import { getSpeakers } from '../../../reactApp/src/components/api/speakers';


const Speakers = () => {  
    const authToken = localStorage.getItem('token');
    const [speakers, setSpeakers] = useState([]);
    const [speakersCopy, setSpeakersCopy] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
     
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    
    
    useEffect(() => {
        const timer = setTimeout(() => {
            getSpeakers(authToken).then(res => {
                setSpeakers(res.speakers);
            })
        }, 1000);
        
        const results = speakers.filter(person => person.title.toLowerCase().includes(searchTerm));
        if(results.length > 0){
            setSpeakersCopy(results);
        } else{
            getSpeakers(authToken).then(res => {
                setSpeakersCopy(res.speakers);
            })
        }
        
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const ShowSpeakers = () => {
        return speakersCopy.map((speaker, index) => (
            <SpeakersCards
                key={index}
                type = "speaker"
                title = {speaker.title}
                about = {speaker.about}
            />
        ))
    };

    return (
    <>
        <SpeakersTitle> Sudionici </SpeakersTitle>
        {speakers == "" ? <SearchBar active={true} placeholder={"Search speakers . . ."} value={searchTerm} change={handleChange} /> : <SearchBar active={false} placeholder={"Search speakers . . ."} value={searchTerm} change={handleChange} /> }
        <SpeakerSection>
        {speakers == "" ? <Loader/> : ShowSpeakers()}   
        </SpeakerSection>
    </>

    );
}

export default Speakers;
