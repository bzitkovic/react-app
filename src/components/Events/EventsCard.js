import React from 'react';
import './EventsCard.scss';


const EventsCard = (props) => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox-Icon InfoBox-Icon_TypeEvent"></div>
                <h2 className="InfoBox-Title">How can we benefit from React Redux</h2>
            </div>
            <div className="InfoBox-Subheader">
                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img className="InfoBox-SubheaderImg" src={props.imageLocation} alt={props.altLocation} />
                    </figure>
                    <span className="InfoBox-SubheaderBoxText">Dvorana D09</span>
                </div>

                <div className="InfoBox-SubheaderBox">
                    <figure className="InfoBox-SubheaderFigure">
                        <img src={props.imageTime} alt={props.altTime} className="InfoBox-SubheaderImg" />
                    </figure>
                    <span className="InfoBox-SubheaderBoxText">24.3 u 13:45</span>
                </div>
            </div>
            <p className="InfoBox-About">
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one. </p>
            <div className="InfoBox-Footer">
                <a className="#" className="InfoBox-BtnJoin">Prijavi se na predavanje</a>
            </div>
        </div>
    )
}

export default EventsCard;