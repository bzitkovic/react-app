import React, { useState, useEffect } from 'react';
import Progress from 'rsup-progress'
import Card from '../components/Card/Card';
import LastYear from '../components/LastYear/LastYear';
import Hero from '../components/Hero/Hero';
import More from '../components/More/More';
import MettingImage from '../assets/images/about.jpg';
import SpeakersImage from '../assets/images/speakers.jpg';
import CalendarImage from '../assets/images/calendar.jpg';
import PartnerImage from '../assets/images/partner.jpg';
import FOILastYear from '../assets/images/last-year.jpg';
import {SectionMoreCards } from '../components/Card/CardStyle';
import { HeroSection } from '../components//Hero/HeroStyle.js';
import { SectionLastYear } from '../components/LastYear/LastYearStyle';
import { SectionMore } from '../components/More/MoreStyle';


const Home = () => {  
    const progress = new Progress({
        height: 7,
        color: 'red',
    })
    const [data, setData] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setData();
            progress.end();
        }, 2000);
        return () => clearTimeout(timer);
    }, "");

    const ShowData = () => {
        return  (
            <>
            <HeroSection>
                <Hero />
            </HeroSection>

            <SectionMore>
                <More>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
                    one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                    "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                    amet..", comes from a line in section 1.10.32.
                </More>

                <SectionMoreCards>
                    <Card image = {MettingImage} alt = "meeting-image"> O tjednu karijera </Card>
                    <Card image = {SpeakersImage} alt = "speakers-image" children = "Speakers"> Predavači </Card>
                    <Card image = {CalendarImage} alt = "calendar-image" children = "Calendar"> Raspored </Card>
                    <Card image = {PartnerImage} alt = "partner-image" children = "Partners"> Partneri </Card>
                </SectionMoreCards>
            </SectionMore>

            <SectionLastYear>
                <LastYear image={FOILastYear} alt="last-year"> FOI tjedan karijera 2019 </LastYear>
            </SectionLastYear>
        </>
        )
    }
    return (
       <>
       {data == "" ? progress.start() : ShowData()}  
       </>
    );
}

export default Home;