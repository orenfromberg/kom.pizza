import React from 'react';
import './style.css'

const PrimaryButton = (props) => {
    return (
        <button className="primary-button"
            onClick={props.onClick}>
            {
                props.text
            }
        </button>
    );
}

export default PrimaryButton;