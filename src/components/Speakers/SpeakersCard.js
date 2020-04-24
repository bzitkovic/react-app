import React from 'react';
import { InfoBox, Header, BtnJoin, Title, TypeEvent, About ,Footer } from './SpeakersCardStyle.js';



const SpeakersCard = (props) => {
    return (
        <InfoBox>
            <Header>
                <TypeEvent></TypeEvent>
                <Title>{props.title}</Title>
            </Header>
            <About>
               {props.about}
            </About>
            <Footer>
                <BtnJoin href="#">Prijavi se na predavanje</BtnJoin>
            </Footer>
        </InfoBox>
    )
}

export default SpeakersCard;