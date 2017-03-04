import React, { Component } from 'react';
//import React from 'react';
import ReactDOM from 'react-dom';

import './usernewentry.css';
import UserFeatureList from "./UserFeatureList.js";
import UserList from "./UserList.js";




class UsrNewEntry extends React.Component {
            constructor(props){
              super(props);
              this.state = {position:'',sid:'',image:''};
              this.handleGet = this.handleGet.bind(this);
              this.showPosition= this.showPosition.bind(this);
              this.AddMarker = this.AddMarker.bind(this);
              this.getMap=this.getMap.bind(this);
              this.handleBack=this.handleBack.bind(this);
              this.handleSearch=this.handleSearch.bind(this);
              this.handleFeature=this.handleFeature.bind(this);

            }


            handleSearch(){
             var x = document.getElementById("myFile");
             var form = new FormData();
             var that=this;
               for (var i = 0; i < x.files.length; i++) {
                 var file = x.files[i];
                 form.set('image',file);
                 console.log(file);
                 fetch('http://localhost:9000/images', {
                             method: 'POST',
                             body: form
                           }).then(response=>response.json())
                           .then(function(json){
                            console.log(json);
                            that.setState({image:json})

                           })
                           }

         }


            handleBack(){

              var c=document.getElementById("content");
              ReactDOM.render(<UserList/>,c);
            }



            handleGet(){

                          if (navigator.geolocation) {
                              navigator.geolocation.getCurrentPosition(this.showPosition);
                          }
                          else {
                            alert("Geolocation is not supported by this browser.");
                          }

            }
            showPosition(position)
            {
                      var lat= position.coords.latitude ;
                      var lon= position.coords.longitude;
                      document.getElementById("lat").value=lat;
                      document.getElementById("long").value=lon;
            }



            componentWillUpdate(){

                          fetch(`http://localhost:9000/Features`)
                          .then(response => response.json())
                          .then(json=>this.setState({surveys:json}))

            }




            getMap(){

                                var mapOptions = {
                                    center: new google.maps.LatLng(51.5, -0.12),
                                    zoom: 10,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                              }
                              var map = new google.maps.Map(document.getElementById("map"), mapOptions);

                                var mapOptions = {
                                      center: new google.maps.LatLng(document.getElementById("lat").value,document.getElementById("long").value),
                                      zoom: 10,
                                      mapTypeId: google.maps.MapTypeId.ROADMAP
                                }
                              var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                              this.state.position=mapOptions.center;
                              this.AddMarker(mapOptions);


                  }



                        AddMarker(mapOptions)
                        {
                                var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                                var marker = new google.maps.Marker({
                                position:this.state.position,
                                map: map,
                                draggable:true
                          });
                          google.maps.event.addListener(marker,"click",function(e){
                            console.log(e);
                            // document.getElementById("lat").value=e.LatLng.lat();
                            // document.getElementById("long").value=e.LatLng.lng();


                          })

                        }



            handleFeature(id){
              this.state.sid=id;

                      fetch('http://localhost:9000/Features', {
                                    method: 'POST',
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Accept":"application/json"
                                    },
                                    body: JSON.stringify({

                                                    name:Name.value,
                                                    latitude:lat.value,
                                                    longitude:long.value,
                                                    country:Country.value,
                                                    state:State.value,
                                                    district:District.value,
                                                    deities:Deities.value,
                                                    festivals:Festivals.value,
                                                    archstyle:architecture.value,
                                                    datebuilt:datebuilt.value,
                                                    image:this.state.image,
                                                    creator:Creator.value,
                                                    guides:Guides.value,
                                                    eateries:Eateries.value,
                                                    s_id:this.state.id
                                    })
                                  })
                                  alert("entry added");
            }


         render() {
            return (

                    <div className="UsrNewEntry">
                    <p id="para">

                          <label><b> Name</b></label>
                          <input  type="text"  className="textbox" placeholder="Name" id="Name"/><br/><br/>

                          <label><b>Latitude</b></label>
                          <input  type="text" className="textbox" id="lat" placeholder="latitude" /><br/><br/>

                          <label> <b>Longitude: </b></label>
                          <input  type="text" className="textbox" id="long" placeholder="longitude" /><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;

                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button  className="w3-btn w3-round-large w3-small" onClick={()=>this.handleGet()}><i className="fa fa-globe"></i></button>&nbsp;&nbsp;

                          <button className="w3-btn w3-round-large w3-small" onClick={()=>this.getMap()}><i className="fa fa-map-pin"></i></button>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div id="map" className="map" ref="map"> </div>



                          <label><b>Country</b></label>
                          <input  type="text" className="textbox" placeholder="Country" id="Country"/><br/><br/>

                          <label><b>State</b></label>
                          <input  type="text" className="textbox"  placeholder="State" id="State"/><br/><br/>

                          <label><b>District</b></label>
                          <input  type="text" className="textbox" placeholder="District" id="District"/><br/><br/>

                          <label><b>Primary Deities</b></label>
                          <input  type="text" className="textbox" placeholder="Deities" id="Deities"/><br/><br/>


                         <label><b>Important Festivals</b></label>
                         <input  type="text" className="textbox" placeholder="Festivals" id="Festivals"/><br/><br/>

                         <label><b>Architectual Styles</b> </label>
                         <input  type="text" className="textbox" placeholder="architecture" id="architecture"/><br/><br/>

                         <label><b>Date Built</b></label>
                         <input  type="text" className="textbox" placeholder="datebuilt" id="datebuilt"/><br/><br/>

                         <label><b>Creator</b></label>
                         <input  type="text" className="textbox" placeholder="Creator" id="Creator"/><br/><br/>


                         <input type="file" id="myFile" name="image" multiple="multiple" accept=".png" onChange={this.handleSearch}/>
                                                <br/><br/>

                         <label><b>Availability Of Tourist Guide</b></label>
                         <select id="Guides" >
                                    <option value="NULL">--</option>
                                    <option value="YES">YES</option>
                                    <option value="NO">NO</option>
                          </select><br/><br/>

                          <label>Availability of Eateries:</label>
                          <select id="Eateries" >
                                                    <option value="NULL">--</option>
                                                    <option value="YES">YES</option>
                                                    <option value="NO">NO</option>
                          </select><br/><br/>


                          <button className="w3-btn w3-round-large w3-large" onClick={()=>this.handleFeature(this.props.sid)} >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className="w3-btn w3-round-large w3-large" onClick={()=>this.handleBack()} >Back</button><br/><br/>


                          </p>
                  </div>


                      );
         }
}

export default UsrNewEntry;
