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





            componentWillUpdate(){

                          fetch(`http://localhost:9000/Features`)
                          .then(response => response.json())
                          .then(json=>this.setState({surveys:json}))

            }




            componentDidMount(){
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function(position){
                    var lat= position.coords.latitude ;
                    var lon= position.coords.longitude;
                    document.getElementById("lat").value=lat;
                    document.getElementById("long").value=lon;

                  });
                  var mylatlng=new google.maps.LatLng(document.getElementById("lat").value,document.getElementById("long").value);
                                  var mapOptions = {
                                        center:mylatlng,
                                        zoom: 10,
                                        mapTypeId: google.maps.MapTypeId.ROADMAP
                                  }
                                  console.log(mylatlng.lat());
                                var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                                var geocoder = new google.maps.Geocoder();

                                     var marker = new google.maps.Marker({
                                     position:mylatlng,
                                     map: map,
                                     draggable:true
                               });
                               google.maps.event.addListener(marker,"dragend",function(){

                               console.log(geocoder);
                               geocoder.geocode({'latLng': marker.getPosition()}, function(results,status) {
                                  if (status == google.maps.GeocoderStatus.OK) {
                                    if(results[0]){
                                    document.getElementById("lat").value=marker.getPosition().lat();
                                    document.getElementById("long").value=marker.getPosition().lng();
                                   }
                                  }
                               })



                               })
              }





                  }




            handleFeature(id){
              this.state.sid=id;
              var id=this.props.uid;
              console.log(id);

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
                                                    uid:id,
                                                    eateries:Eateries.value,
                                                    s_id:this.state.id
                                    })
                                  })
                                  alert("entry added");
            }


         render() {
            return (
              <div className="UsrNewEntry">
              <center>
                                <p id="para">
                                    <form name="Entries" id="UsrNewEntry" novalidate>
                                    <div className="form-group">
                                      <div className="col-sm-6" ><label><b> Name</b></label></div>
                                      <div className="col-sm-4" ><input  type="text"  className="form-control" placeholder="Name" id="Name" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                      <div className="col-sm-6" ><label><b>Latitude</b></label></div>
                                      <div className="col-sm-4" ><input  type="text" className="form-control textbox" defaultValue="17.411"  placeholder="Latitude" id="lat"  /><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                      <div className="col-sm-6" ><label><b>Longitude</b></label></div>
                                      <div className="col-sm-4" ><input  type="text" className="form-control textbox" defaultValue="78.38" placeholder="Longitude" id="long"  /><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div id="map" className="map" ref="map"> </div>





                                      <div className="form-group">
                                      <div className="col-sm-6" ><label><b>Country</b></label></div>
                                      <div className="col-sm-4" ><input  type="text" className="form-control textbox" placeholder="Country" id="Country" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                      <div className="col-sm-6" ><label><b>State</b></label></div>
                                      <div className="col-sm-4" ><input  type="text" className="form-control textbox"  placeholder="State" id="State" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                      <div className="col-sm-6" ><label><b>District</b></label></div>
                                      <div className="col-sm-4" ><input  type="text" className="form-control textbox" placeholder="District" id="District" required data-validation-required-message="Please enter your name."z/><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                      <div className="col-sm-6" ><label><b>Primary Deities</b></label></div>
                                      <div className="col-sm-4" ><input  type="text" className="form-control textbox" placeholder="Deities" id="Deities" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>


                                      <div className="form-group">
                                     <div className="col-sm-6" ><label><b>Important Festivals</b></label></div>
                                     <div className="col-sm-4" ><input  type="text" className="form-control textbox" placeholder="Festivals" id="Festivals" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                     <p className="help-block text-danger"></p>
                                     </div>

                                     <div className="form-group">
                                     <div className="col-sm-6" ><label><b>Architectual Styles</b> </label></div>
                                     <div className="col-sm-4" ><input  type="text" className="form-control textbox" placeholder="architecture" id="architecture" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                     <p className="help-block text-danger"></p>
                                     </div>

                                     <div className="form-group">
                                     <div className="col-sm-6" ><label><b>Date Built</b></label></div>
                                     <div className="col-sm-4" ><input  type="text" className="form-control textbox" placeholder="datebuilt" id="datebuilt" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                     <p className="help-block text-danger"></p>
                                     </div>

                                     <div className="form-group">
                                     <div className="col-sm-6" ><label><b>Creator</b></label></div>
                                     <div className="col-sm-4" ><input  type="text" className="form-control textbox" placeholder="Creator" id="Creator" required data-validation-required-message="Please enter your name."/><br/><br/></div>
                                     <p className="help-block text-danger"></p>
                                     </div>

                                     <div className="form-group">
                                     <input type="file" id="myFile" name="image" multiple="multiple" accept=".png" onChange={this.handleSearch}/>
                                                            <br/><br/>
                                    <p className="help-block text-danger"></p>
                                    </div>

                                      <div className="form-group">
                                     <div className="col-sm-6" ><label><b>Availability Of Tourist Guide</b></label></div>
                                     <div className="col-sm-4" ><select id="Guides" >
                                                <option value="NULL">--</option>
                                                <option value="YES">YES</option>
                                                <option value="NO">NO</option>
                                      </select><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>

                                      <div className="form-group">
                                      <div className="col-sm-6" ><label>Availability of Eateries:</label></div>
                                      <div className="col-sm-4" ><select id="Eateries" >
                                                                <option value="NULL">--</option>
                                                                <option value="YES">YES</option>
                                                                <option value="NO">NO</option>
                                      </select><br/><br/></div>
                                      <p className="help-block text-danger"></p>
                                      </div>
                                        <br/><br/><br/><br/>
                                        <center>
                                      <button type="submit" className="w3-btn w3-round-large w3-large" onClick={()=>this.handleFeature(this.props.sid)} >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className="w3-btn w3-round-large w3-large" onClick={()=>this.handleBack()} >Back</button><br/><br/>
                                      </center>
                                      </form>
                                      </p>
                                      </center>
                              </div>



                      );
         }
}

export default UsrNewEntry;
