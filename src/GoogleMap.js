import React from 'react';
import ReactDOM from 'react-dom';
import './GoogleMap.css';


class GoogleMap extends React.Component {
  constructor(props) {
  super(props);



  this.getMap=this.getMap.bind(this);
}

getMap(){
  var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.12),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}





render(){

    return(
        <div className="contactuspage w3-container " >
            <div id="map" ></div>
            <button onClick={()=>this.getMap()}>get map</button>
        </div>
    )
  }
}
export default GoogleMap;
