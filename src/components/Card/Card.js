import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <a href="#">
            <div className="SectionMore-Card">
                <img src={props.image} alt={props.alt} />
                <h2>{props.children}</h2>
            </div>
        </a>
    )
}

export default Card;