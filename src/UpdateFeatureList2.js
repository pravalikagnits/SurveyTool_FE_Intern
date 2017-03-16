import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './UpdateFeatureList2.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import Index5 from './Index5.js';
import UserList from './UserList.js';
var flag=0;

class UpdateFeatureList2 extends Component {

  constructor(props) {
                        super(props);
                  this.state = {features:[],image:''};
                  this.handleUpdate=this.handleUpdate.bind(this);
                  this.handleSearch=this.handleSearch.bind(this);
                }

                handleSearch(){
                 var x = document.getElementById("myFile");
                 var form = new FormData();
                 var that=this;
                 var xxx;
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
                                 flag=1;
                              console.log(flag);
                                })
                                }


             }


     handleUpdate(id){
       var auth = window.sessionStorage.getItem('token');
     var uname = window.sessionStorage.getItem('uname');
     console.log(auth+"//////");
     console.log(uname+"/////");
     console.log(flag);
         console.log(id);
         var img;
         if(flag==1)
         {
           img=this.state.image;
           console.log(img);
           flag=0;
         }
         else {
           img=this.props.image;
           console.log(img);}

                                fetch('http://localhost:9000/Features/'+ id, {


                                 method: 'PUT',
                                 headers: {
                                    "Content-Type": "application/json",
                                    "Accept":"application/json",
                                    "Authentication" : auth,
                                    "id" : uname
                                 },
                                 body: JSON.stringify({
                                    name:names.value,
                                    latitude:latitude.value,
                                    longitude:longitude.value,
                                    country:country.value,
                                    state:state.value,
                                    district:district.value,
                                    deities:deities.value,
                                    festivals:festivals.value,
                                    archstyle:archstyle.value,
                                    datebuilt:datebuilt.value,
                                    creator:creator.value,
                                    image:img,
                                    guides:guides.value,
                                    eateries:eateries.value

                                 })
                               }).then(response => {
                                 if(200 == response.status){
                                   alert("Successfully updated");
                                 }
                                         else{
                                         alert("permission Denied to update this entry");
                                            }



                               })
                   }

                     componentWillUpdate(){
                                   fetch(`http://localhost:9000/Features`)
                                  .then(response => response.json())
                                  .then(json=>this.setState({features:json}))
                     }



                     handleBack()
                     {
                        var c=document.getElementById("content");
                        ReactDOM.render(<UserList />,c);

                     }

                     componentWillMount(){

                        fetch(`http://localhost:9000/Features`)
                        .then(response => response.json())
                        .then(json=>this.setState({features:json}))

                     }


  render() {
    var id=this.props.fid;


    return (
         <div>
  <center>
              <h1>UPDATE SURVEY ENTRY</h1>
          <br/>
          <div className="UpdateFeatureList2 w3-container">

          <p id="para1">


          <br/>
                  <div className="col-sm-6" ><label>Name</label></div><div className="col-sm-4" > <input type="text" id="names" defaultValue={this.props.name}  className="w3-input"  placeholder="name"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Latitude</label></div><div className="col-sm-4" > <input type="text" id="latitude" defaultValue ={this.props.latitude}    className="w3-input" placeholder="latitude"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Longitude</label></div><div className="col-sm-4" > <input type="text" id="longitude" defaultValue={this.props.longitude}  className="w3-input"  placeholder="longitude"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Country</label></div><div className="col-sm-4" > <input type="text" id="country" defaultValue={this.props.country}  className="w3-input"  placeholder="country"/></div><br/><br/>
                   <div className="col-sm-6" ><label>State</label></div><div className="col-sm-4" > <input type="text" id="state" defaultValue={this.props.state}  className="w3-input"  placeholder="state"/></div><br/><br/>
                   <div className="col-sm-6" ><label>District</label></div><div className="col-sm-4" > <input type="text" id="district" defaultValue={this.props.district}  className="w3-input"  placeholder="district"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Deities</label></div><div className="col-sm-4" > <input type="text" id="deities" defaultValue={this.props.deities}  className="w3-input"  placeholder="primary deities"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Festivals</label></div> <div className="col-sm-4" ><input type="text" id="festivals" defaultValue={this.props.festivals}  className="w3-input"  placeholder="Important festivals"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Architecture</label></div><div className="col-sm-4" > <input type="text" id="archstyle" defaultValue={this.props.archstyle}  className="w3-input"  placeholder="architecture"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Date Built</label></div> <div className="col-sm-4" ><input type="text" id="datebuilt" defaultValue={this.props.datebuilt}  className="w3-input"  placeholder="datebuilt"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Creator</label></div><div className="col-sm-4" > <input type="text" id="creator" defaultValue={this.props.creator}  className="w3-input"  placeholder="creator"/></div><br/><br/>
                   <input className="choose" type="file" id="myFile" name="image" multiple="multiple" accept=".png" onChange={this.handleSearch}/>  <br/><br/>
                   <div className="col-sm-6" ><label>Guides</label></div><div className="col-sm-4" > <input type="text" id="guides" defaultValue={this.props.guides}  className="w3-input"  placeholder="guides"/></div><br/><br/>
                   <div className="col-sm-6" ><label>Eateries</label></div><div className="col-sm-4" > <input type="text" id="eateries" defaultValue={this.props.eateries}  className="w3-input"  placeholder="eateries"/></div><br/><br/>
                   <center>
                   <button  className="b6 w3-btn w3-round-large w3-large" onClick={()=>this.handleUpdate(id)}>Update</button>&nbsp;&nbsp;&nbsp;
                   <button className="b6 w3-btn w3-round-large w3-large" onClick={()=>this.handleBack()}><i className="fa fa-backward"></i> Back</button>
                   </center>
                    <br/>

                </p>


            </div>
              </center>
              </div>
           );
}
}


export default UpdateFeatureList2;
