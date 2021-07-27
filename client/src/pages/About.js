import React from 'react';
import '../index.css';
const About = () => {

return (
    <>
    <div className="text-center container">
    <h1 className="text-4xl serif mb-5">About Us</h1>
    <img className="max-w-xs inline-block" src="/images/delivery.jpg" alt="delivery person"/>
    <p className="inline-block m-8 max-w-xs">PostGrubDash is a technology company that brings the best restaurants in your city to your fingertips.
     We at PostGrubDash are big fans of convenience, and our goal is to make daily life just a little
    more convenient for our customers. Let's be honest, the worst part of ordering food is actually going to get it. Let us take care of that
    for you!  </p>
    <br/>
    <br/>
    <p className="inline-block max-w-xs m-5">We believe the customer comes first and because of that we take the time to 
    train our drivers in customer service. We think this helps separate us from our competitors and ensure you have the best
    experience possible.</p>
    <img className="inline-block max-w-xs m-5" src="/images/customer.jpg" alt="customer" />
    </div>
    </>
)
}

export default About;