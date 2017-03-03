import React from 'react';
import ReactDOM from 'react-dom';
import './aboutus.css'

class aboutus extends React.Component {



  render(){

    return(
      <div className="aboutuspage w3-text-black w3-container">

      <h1> About Us</h1>

      <p className="w3-text-black">
      We’re a smart, passionate group of people who work really hard so you don’t have to.<br/> We strive to make our tools powerful enough for professional researchers, yet easy enough for a survey novice. <br/>We’re dedicated to making the design easy enough for anyone – and everyone – to use. </p>

      </div>
    );
  }
}

export default aboutus;
