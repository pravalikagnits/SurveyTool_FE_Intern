import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './UpdateEntry.css';
import './UpdateFeatureList.css';

import Index6 from './Index6.js';
import Index7 from './Index7.js';
import Index5 from './Index5.js';
import AdminList from './AdminList.js';

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
        xxx=json;

      })
      that.setState({image:xxx});
      console.log(this.state.image);
    }

  }


  handleUpdate(id){
    console.log(id);
    console.log(this.state.image);

    fetch('http://localhost:9000/Features/'+ id, {


      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
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
        image:this.state.image,
        guides:guides.value,
        eateries:eateries.value

      })
    })
    alert("Features updated!!!!");

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


      <div className="UpdateEntry w3-container">

      <h1 className="Updatefeature">Update Feature</h1><br/><br/>
      <input type="text" id="names" defaultValue={this.props.name}  className="w3-input"  placeholder="name"/><br/><br/>
      <input type="text" id="latitude" defaultValue ={this.props.latitude}    className="w3-input" placeholder="latitude"/><br/><br/>
      <input type="text" id="longitude" defaultValue={this.props.longitude}  className="w3-input"  placeholder="longitude"/><br/><br/>
      <input type="text" id="country" defaultValue={this.props.country}  className="w3-input"  placeholder="country"/><br/><br/>
      <input type="text" id="state" defaultValue={this.props.state}  className="w3-input"  placeholder="state"/><br/><br/>
      <input type="text" id="district" defaultValue={this.props.district}  className="w3-input"  placeholder="district"/><br/><br/>
      <input type="text" id="deities" defaultValue={this.props.deities}  className="w3-input"  placeholder="primary deities"/><br/><br/>
      <input type="text" id="festivals" defaultValue={this.props.festivals}  className="w3-input"  placeholder="Important festivals"/><br/><br/>
      <input type="text" id="archstyle" defaultValue={this.props.archstyle}  className="w3-input"  placeholder="architecture"/><br/><br/>
      <input type="text" id="datebuilt" defaultValue={this.props.datebuilt}  className="w3-input"  placeholder="datebuilt"/><br/><br/>
      <input type="text" id="creator" defaultValue={this.props.creator}  className="w3-input"  placeholder="creator"/><br/><br/>
      <input type="file" id="myFile" name="image" multiple="multiple" accept=".png" onChange={this.handleSearch}/>  <br/><br/>
      <input type="text" id="guides" defaultValue={this.props.guides}  className="w3-input"  placeholder="guides"/><br/><br/>
      <input type="text" id="eateries" defaultValue={this.props.eateries}  className="w3-input"  placeholder="eateries"/><br/><br/>
      <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.handleUpdate(id)}>Update</button>&nbsp;&nbsp;&nbsp;
      <button className="w3-btn w3-round-large w3-large" onClick={()=>this.handleBack()}>Back</button>

      <br/>

      </div>

    );
  }
}


export default UpdateFeatureList;
