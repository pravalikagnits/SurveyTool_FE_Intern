import React from 'react';
import icons from './icons'
import ReactDOM from 'react-dom';
import './home.css'
class home extends React.Component {



  render(){

    return(
      <div className="homepage w3-container ">
      <h1> Create Survey !!! Get Answers</h1>
      <p>Have your online survey built and sent out within minutes of signing up. Map Survey gives you all you need to create and analyze your surveys.</p>

      <GoogleMap>

      </GoogleMap>

      </div>
    );
  }
}

export default home;
