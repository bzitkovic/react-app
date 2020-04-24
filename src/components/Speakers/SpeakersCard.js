import React from 'react';
import './SpeakersCard.scss';


const SpeakersCard = (props) => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox-Icon InfoBox-Icon_TypeSpeaker"></div>
                <h2 className="InfoBox-Title">{props.title}</h2>
            </div>
            <p className="InfoBox-About">
               {props.about}
            </p>
            <div className="InfoBox-Footer">
                <a href="#" className="InfoBox-BtnJoin">Prijavi se na predavanje</a>
            </div>
        </div>
    )
}

export default SpeakersCard;