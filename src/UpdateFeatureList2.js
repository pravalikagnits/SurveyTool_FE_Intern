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
                  this.state = {features:[],image:'',sid:''};
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
                                    landmark:landmark.value,
                                    image:img,
                                    others:others.value

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
                       this.state.sid=this.props.sid;
                       console.log(this.props.sid,"props");

                       console.log(this.state.sid,"gjjvh");
                        var c=document.getElementById("content");
                        ReactDOM.render(<UserList sid={this.state.sid} />,c);

                     }

                     componentWillMount(){

                        fetch(`http://localhost:9000/Features`)
                        .then(response => response.json())
                        .then(json=>this.setState({features:json}))

                     }


  render() {
    var id=this.props.fid;


    return (
         <div className="updatefeaturelist2">
  <center><br/>
              <h1>UPDATE SURVEY ENTRY</h1>
          <br/>
          <div className="UpdateFeatureList2 w3-container">




          <br/>
                  <div className="col-sm-4" ><label className="l9">Name</label></div><div className="col-sm-6" > <input type="text" id="names" defaultValue={this.props.name}  className="ghk w3-input"  placeholder="name"/><br/><br/></div>
                   <div className="col-sm-4" ><label className="l9">Latitude</label></div><div className="col-sm-6" > <input type="text" id="latitude" defaultValue ={this.props.latitude}    className="ghk w3-input" placeholder="latitude"/><br/><br/></div>
                   <div className="col-sm-4" ><label className="l9">Longitude</label></div><div className="col-sm-6" > <input type="text" id="longitude" defaultValue={this.props.longitude}  className="ghk w3-input"  placeholder="longitude"/><br/><br/></div>
                   <div className="col-sm-4" ><label className="l9">Country</label></div><div className="col-sm-6" > <input type="text" id="country" defaultValue={this.props.country}  className="ghk w3-input"  placeholder="country"/><br/><br/></div>

                   <div className="col-sm-4" ><label className="l9">State</label></div><div className="col-sm-6" > <input type="text" id="state" defaultValue={this.props.state}  className=" ghk w3-input"  placeholder="state"/><br/><br/></div>

                   <div className="col-sm-4" ><label className="l9">District</label></div><div className="col-sm-6" > <input type="text" id="district" defaultValue={this.props.district}  className="ghk w3-input"  placeholder="district"/><br/><br/></div>


                   <div className="col-sm-4" ><label className="l9">Landmark</label></div><div className="col-sm-6" > <input type="text" id="landmark" defaultValue={this.props.landmark}  className="ghk w3-input"  placeholder="Landmark"/><br/><br/></div>

                   <input className="choose" type="file" id="myFile" name="image" multiple="multiple" accept=".png" onChange={this.handleSearch}/>  <br/><br/>


                   <div className="col-sm-4" ><label className="l9">Others</label></div><div className="col-sm-6" > <textarea defaultValue={this.props.others}  className="ghk w3-input"  placeholder="Other Details *" id="others" name="others" ></textarea><br/><br/></div>
                   <center><br/><br/><br/><br/><br/><br/><br/><br/>
                   <button  className="button" onClick={()=>this.handleUpdate(id)}>Update</button>&nbsp;&nbsp;&nbsp;
                   <button className="button" onClick={()=>this.handleBack()}><i className="fa fa-backward"></i> Back</button>
                   </center>
                    <br/>




            </div>
              </center><br/>
              </div>
           );
}
}


export default UpdateFeatureList2;
