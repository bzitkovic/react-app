import React from 'react';
import LoaderCompo from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Loader.scss';


const Loader = (props) => {  
    return (
        <div className="LoaderComponent">
            <LoaderCompo
            type="Bars"
            color="red"
            height={100}
            width={100}
            timeout={3000} 
            />
        </div>
        
           
    );
}

export default Loader;