import React from 'react';
import './EventsCard.scss';


const EventsCard = (props) => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox-Icon InfoBox-Icon_TypeEvent"></div>
                <h2 className="InfoBox-Title">{props.title}</h2>
            </div>
            <div className="InfoBox-Subheader">
                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img className="InfoBox-SubheaderImg" src={props.imageLocation} alt={props.altLocation} />
                    </figure>
                    <span className="InfoBox-SubheaderBoxText">{props.location}</span>
                </div>

                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img src={props.imageTime} alt={props.altTime} className="InfoBox-SubheaderImg" />
                    </figure>
                    <span className="InfoBox-SubheaderBoxText">{props.dateTime}</span>
                </div>
            </div>
            <p className="InfoBox-About">
                {props.about}
            </p>
            <div className="InfoBox-Footer">
                <a className="#" className="InfoBox-BtnJoin">Prijavi se na predavanje</a>
            </div>
        </div>
    )
}

export default EventsCard;