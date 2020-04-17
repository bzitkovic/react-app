import React from 'react';
import './More.scss';

const More = (props) => {
    return (
        <div className="SectionMore-Description">
            <p>
                {props.children}
            </p>
            <button type="button" className="SectionMore-Button">SAZNAJ VIŠE</button>
        </div>
    )
}

export default More;