import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './UpdateFeatureList.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import Index5 from './Index5.js';
import AdminList from './AdminList.js';
var flag=0;

class UpdateFeatureList extends Component {

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
  var img;
  console.log(auth+"//////");
  console.log(uname+"/////");
console.log(flag);
    console.log(id);
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
    ReactDOM.render(<AdminList />,c);

  }

  componentWillMount(){

    fetch(`http://localhost:9000/Features`)
    .then(response => response.json())
    .then(json=>this.setState({features:json}))

  }


  render() {
    var id=this.props.fid;


    return (

      <center>
      <div className="UpdateFeatureList w3-container">
      <center>

      <h1 className="Updatefeature">Update Feature</h1><br/><br/>
       <div className="col-sm-6" ><label><b>Name</b></label></div>
       <div className="col-sm-4" ><input type="text" id="names" defaultValue={this.props.name}  className="w3-input"  placeholder="name"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Latitude</b></label></div><div className="col-sm-4" ><input type="text" id="latitude" defaultValue ={this.props.latitude}    className="w3-input" placeholder="latitude"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Longitude</b></label></div><div className="col-sm-4" ><input type="text" id="longitude" defaultValue={this.props.longitude}  className="w3-input"  placeholder="longitude"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Country</b></label></div><div className="col-sm-4" ><input type="text" id="country" defaultValue={this.props.country}  className="w3-input"  placeholder="country"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>District</b></label></div><div className="col-sm-4" ><input type="text" id="state" defaultValue={this.props.state}  className="w3-input"  placeholder="state"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>State</b></label></div><div className="col-sm-4" ><input type="text" id="district" defaultValue={this.props.district}  className="w3-input"  placeholder="district"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Deities</b></label></div><div className="col-sm-4" ><input type="text" id="deities" defaultValue={this.props.deities}  className="w3-input"  placeholder="primary deities"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Festivals</b></label></div><div className="col-sm-4" ><input type="text" id="festivals" defaultValue={this.props.festivals}  className="w3-input"  placeholder="Important festivals"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Architecture</b></label></div><div className="col-sm-4" ><input type="text" id="archstyle" defaultValue={this.props.archstyle}  className="w3-input"  placeholder="architecture"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Date Built</b></label></div><div className="col-sm-4" ><input type="text" id="datebuilt" defaultValue={this.props.datebuilt}  className="w3-input"  placeholder="datebuilt"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Creator</b></label></div><div className="col-sm-4" ><input type="text" id="creator" defaultValue={this.props.creator}  className="w3-input"  placeholder="creator"/><br/><br/></div>
      <input className="c10" type="file" id="myFile" defaultValue={this.props.image} name="image" multiple="multiple" accept=".png" onChange={this.handleSearch}/> <br/><br/>
       <div className="col-sm-6" ><label><b>Guides</b></label></div><div className="col-sm-4" ><input type="text" id="guides" defaultValue={this.props.guides}  className="w3-input"  placeholder="guides"/><br/><br/></div>
       <div className="col-sm-6" ><label><b>Eateries</b></label></div><div className="col-sm-4" ><input type="text" id="eateries" defaultValue={this.props.eateries}  className="w3-input"  placeholder="eateries"/><br/><br/></div>
      <br/><br/><br/><br/><br/><br/><br/><button  className="button" onClick={()=>this.handleUpdate(id)}>Update</button>&nbsp;&nbsp;&nbsp;
      <button className="button" onClick={()=>this.handleBack()}>Back</button>

      <br/><br/><br/>
      </center>

      </div>
      </center>

    );
  }
}


export default UpdateFeatureList;
