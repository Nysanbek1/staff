import './app-filter.css';

import { useState } from 'react';
import { Component } from 'react';

const useBollState = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const useBoll = (newValue) => {
        setValue(newValue);
    };

    return { value, useBoll };
};
const AppFilter = (props) => {

    
    const fill = useBollState(true)
    const apdet = useBollState(false)
    const samSoch = useBollState(false)
    

    const vsePed = () => {
        fill.useBoll(true)
        apdet.useBoll(false)
        samSoch.useBoll(false)
        props.vsePed(fill.value, apdet.value, samSoch.value);

    }
    const vsePov = () => {
        fill.useBoll(false)
        apdet.useBoll(true)
        samSoch.useBoll(false)
        props.vsePed(fill.value, apdet.value, samSoch.value);
    }
    const vseSoch = () => {
        fill.useBoll(false)
        apdet.useBoll(false)
        samSoch.useBoll(true)
        props.vsePed(fill.value, apdet.value, samSoch.value);
    }


    return (
        <div className="btn-group">
            <button 
            className={"btn " + (fill.value ? 'btn-light' : 'btn-outline-light')} 
            type='button'
            onClick={vsePed}>
                все работники 
            </button>

            <button 
            className={"btn " + (apdet.value ? 'btn-light' : 'btn-outline-light')} 
            type='button'
            onClick={vsePov}>
                на повышение 
            </button>

            <button 
            className={"btn " + (samSoch.value ? 'btn-light' : 'btn-outline-light')} 
            type='button'
            onClick={vseSoch}>
                премия
            </button>
        </div>
        
    )
    
}


export default AppFilter;