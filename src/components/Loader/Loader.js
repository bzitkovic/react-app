import React from 'react';
import LoaderCompo from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { LoaderComponent } from './LoaderStyle';


const Loader = (props) => {  
    return (
        <LoaderComponent>
            <LoaderCompo
            type="Bars"
            color="red"
            height={100}
            width={100}
            timeout={3000} 
            />
        </LoaderComponent>
        
           
    );
}

export default Loader;