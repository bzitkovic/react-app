import React from 'react';
import { SectionMoreCard } from './CardStyle';

const Card = (props) => {
    return (
        <a href="#">
            <SectionMoreCard>
                <img src={props.image} alt={props.alt} />
                <h2>{props.children}</h2>
            </SectionMoreCard>
        </a>
    )
}

export default Card;