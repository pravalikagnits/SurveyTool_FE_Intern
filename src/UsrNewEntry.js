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
                            console.log(that.state.image);
                            document.getElementById("im").src=that.state.image;
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
              var auth = window.sessionStorage.getItem('token');
            var uname = window.sessionStorage.getItem('uname');
              this.state.sid=id;
console.log("img",this.state.image);


                      fetch('http://localhost:9000/Features', {
                                    method: 'POST',
                                    headers: {
                                        "Content-Type": "application/json",
                                        "Accept":"application/json",
                                        "Authentication" : auth,
                                        "id" : uname
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
                                                    uname:uname,
                                                    eateries:Eateries.value,

                                    })
                                  }).then(function(data){

                                                  var c=document.getElementById("content");
                                                  ReactDOM.render(<UserList/>,c);
                                                  alert("entry added");

                                  }  )


            }


         render() {
            return (

              <div className="UsrNewEntry1">
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
                                      <center><div id="map" className="map " ref="map"> </div></center>





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
                                     <input className="cp" type="file" id="myFile" name="image" multiple="multiple" accept=".png" onChange={this.handleSearch}/>
                                                            <br/><br/>
                                    <p className="help-block text-danger"></p>
                                    </div>
                                    <img id="im" className="image" src='' alt="image not available!!"/>
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
                                      <button type="submit" className="button" onClick={()=>this.handleFeature(this.props.sid)} >Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className="button" onClick={()=>this.handleBack()} ><i className="fa fa-backward"></i> Back</button><br/><br/>
                                      </center>
                                      </form>
                                      </p>
                                      </center>
                              </div>
                              </div>




                      );
         }
}

export default UsrNewEntry;
