import React from 'react';
import image from './Images/reactform.png';
import Form from './Form';
import "./sigin.scss";

function Signin() {
    return (
        <div className="container">
            <div className="container__left">
                <div className="container__img">
                    <img src={image} alt="" />
                    <h2>Chosse a data range</h2>
                    <p className='container__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
            </div>
            <div className='container__right'>
               
                    <Form />
                
            </div>

        </div>
    )
}

export default Signin;