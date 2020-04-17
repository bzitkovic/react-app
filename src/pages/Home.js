import React from 'react';
import Card from '../components/Card/Card';
import LastYear from '../components/LastYear/LastYear';
import Hero from '../components/Hero/Hero';
import More from '../components/More/More';
import MettingImage from '../assets/images/about.jpg';
import SpeakersImage from '../assets/images/speakers.jpg';
import CalendarImage from '../assets/images/calendar.jpg';
import PartnerImage from '../assets/images/partner.jpg';
import FOILastYear from '../assets/images/last-year.jpg';


const Home = () => {  
    return (
       <>
        <section className="HeroSection">
            <Hero />
        </section>

        <section className="SectionMore">
           <More>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                amet..", comes from a line in section 1.10.32.ffff
            </More>

            <div className="SectionMore-Cards">
                <Card image = {MettingImage} alt = "meeting-image"> O tjednu karijera </Card>
                <Card image = {SpeakersImage} alt = "speakers-image" children = "Speakers"> Predavači </Card>
                <Card image = {CalendarImage} alt = "calendar-image" children = "Calendar"> Raspored </Card>
                <Card image = {PartnerImage} alt = "partner-image" children = "Partners"> Partneri </Card>
            </div>
        </section>

        <section className="SectionLastYear">
            <LastYear image={FOILastYear} alt="last-year"> FOI tjedan karijera 2019 </LastYear>
        </section>
    </>
    );
}

export default Home;