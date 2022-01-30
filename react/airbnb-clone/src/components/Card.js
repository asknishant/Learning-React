import React from 'react';
import logo from '../images/logo.jpg'
export default function Card() {
    return (
        <div className='card'>
            <img src={logo} className='card--image'/>
            <div>
                <span>5.0</span>
                <span>(6) </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}