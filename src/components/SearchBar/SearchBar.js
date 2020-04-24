import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <input type="text" value={props.value} onChange={props.change} className="SearchBar_Input" placeholder={props.placeholder}/>
        </div>
    )
}

export default SearchBar