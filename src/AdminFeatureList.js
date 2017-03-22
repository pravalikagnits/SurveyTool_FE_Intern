import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminFeatureList.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import UsrNewEntry from './UsrNewEntry.js';
import UpdateFeatureList from './UpdateFeatureList.js';
import AdminList from './AdminList.js'


class AdminFeatureList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item:[],sid:''
    };
    this.handleBack=this.handleBack.bind(this);




  }


  handleBack(){

    var c=document.getElementById("content");
    ReactDOM.render(<AdminList sid={this.state.item.sid} />,c);
  }




  componentWillUpdate(){
    fetch(`http://localhost:9000/Features`)
    .then(response => response.json())
    .then(json=>this.setState({Features:json}))
  }



  componentWillMount(){
    var  id=this.props.fid;
    console.log(id);
    fetch(`http://localhost:9000/Features/`+id)
    .then(response => response.json())
    .then(json=>this.setState({item:json}))

    console.log(this.state.item);

  }


  render() {
    return (


      <div className="AdminFeatureList w3-container">  <br/>
      <div className="card">

      <div  className="container1" >
      <table className="abcdef">
      <tbody className="fgh">
      <td className="tdata1">

      <h3><strong>Name: {this.state.item.name}</strong></h3>

      <div className="row">
      <div className="col-sm-6" ><strong>Latitude:</strong></div>
      <div className="col-sm-6"><strong> {this.state.item.latitude}</strong></div>
      </div>

      <div className="row">
      <div className="col-sm-6" ><strong>longitude:</strong></div>
      <div className="col-sm-5"><strong> {this.state.item.longitude}</strong></div><br/>
      </div>

      <div className="row">
      <div className="col-sm-6" ><strong>Country:</strong></div>
      <div className="col-sm-6"><strong> {this.state.item.country}</strong></div><br/>
      </div>

      <div className="row">
      <div className="col-sm-6" ><strong>State:</strong></div>
      <div className="col-sm-6"> <strong>{this.state.item.state}</strong></div><br/>
      </div>

      <div className="row">
      <div className="col-sm-6" ><strong>District:</strong></div>
      <div className="col-sm-6"><strong> {this.state.item.district}</strong></div><br/>
      </div>

      <div className="row">
      <div className="col-sm-6" ><strong>Landmark:</strong></div>
      <div className="col-sm-6"><strong> {this.state.item.landmark}</strong></div><br/>
      </div>
    
      <div className="row">
      <div className="col-sm-6" ><strong>Other Details:</strong></div>
      <div className="col-sm-6"><strong> {this.state.item.others}</strong></div><br/>
      </div>
      </td>
      <td className="tdata2">
      <div className="grid1">
      <figure>
      <img  className="images" src={this.state.item.image} alt="image not available!!"/>
      </figure>
      </div>

      </td>
      </tbody>
      </table>
      </div>
      </div>

      <center>

      <button  className="b14" onClick={()=>this.handleBack()}><i className="fa fa-backward"></i> Back</button>&nbsp;&nbsp;&nbsp;
      </center>   <br/>
      </div>




    );
  }
}


export default AdminFeatureList;
