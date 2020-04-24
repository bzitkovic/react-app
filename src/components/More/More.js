import React from 'react';
import { SectionMoreDescription, SectionMoreBottom } from './MoreStyle.js';

const More = (props) => {
    return (
        <SectionMoreDescription>
            <p>
                {props.children}
            </p>
            <SectionMoreBottom type="button" >SAZNAJ VIŠE</SectionMoreBottom>
        </SectionMoreDescription>
    )
}

export default More;