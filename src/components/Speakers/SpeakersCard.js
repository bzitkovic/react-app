import React from 'react';
import './SpeakersCard.scss';


const SpeakersCard = (props) => {
    return (
        <div className="InfoBox">
            <div className="InfoBox-Header">
                <div className="InfoBox-Icon InfoBox-Icon_TypeSpeaker"></div>
                <h2 className="InfoBox-Title">Johan Bach</h2>
            </div>
            <p className="InfoBox-About">
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.
            </p>
            <div className="InfoBox-Footer">
                <a href="#" className="InfoBox-BtnJoin">Prijavi se na predavanje</a>
            </div>
        </div>
    )
}

export default SpeakersCard;