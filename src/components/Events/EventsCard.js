import React from 'react';
import { InfoBox, Header, BtnJoin, Title, TypeEvent, SubHeader, SubheaderBox, SubheaderFigure, SubheaderImg, About ,Footer } from './EventsCardStyle.js';


const EventsCard = (props) => {
    return (
        <InfoBox>
            <Header>
                <TypeEvent></TypeEvent>
                <Title>{props.title}</Title>
            </Header>
            <SubHeader>
                <SubheaderBox>
                    <SubheaderFigure>
                        <SubheaderImg src={props.imageLocation} alt={props.altLocation} />
                    </SubheaderFigure>
                    <span>{props.location}</span>
                </SubheaderBox>

                <SubheaderBox>
                    <SubheaderFigure>
                        <SubheaderImg src={props.imageTime} alt={props.altTime} />
                    </SubheaderFigure>
                    <span>{props.dateTime}</span>
                </SubheaderBox>
            </SubHeader>
            <About>
                {props.about}
            </About>
            <Footer>
                <BtnJoin>Prijavi se na predavanje</BtnJoin>
            </Footer>
        </InfoBox>
    )
}

export default EventsCard;