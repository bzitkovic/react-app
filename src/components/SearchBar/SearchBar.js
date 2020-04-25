import React from 'react';
import { SearchBarContainer, SearchBarInput } from './SearchBarStyle.js';

const SearchBar = (props) => {
    return (
        <SearchBarContainer>
            <SearchBarInput disabled={props.active} type="text" value={props.value} onChange={props.change} placeholder={props.placeholder}/>
        </SearchBarContainer>
    )
}

export default SearchBar