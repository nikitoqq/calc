// @ts-nocheck
import React from "react";
import './Button.css'

const Button = ({ fnClick, label, value }) => {

    const handleClick = (event) => {
        fnClick(event.target.value);
    }

    return <button className="button" value={value} onClick={handleClick}>{label}</button>
}
export default Button;