import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Index6.css';
import Index5 from './Index5.js';


class Index6 extends React.Component {
  constructor() {
    super();
    this.state = {items:[]};
    this.state = {listdata:[]};
    this.handlePost=this.handlePost.bind(this);
    this.updatename=this.updatename.bind(this);
    this.updatedescription=this.updatedescription.bind(this);
    this.updatedate=this.updatedate.bind(this);
  }


  updatename(e){
    this.setState({sname:e.target.value});
  }
  updatedescription(e){
    this.setState({sdescription:e.target.value});
  }
  updatedate(e){
    this.setState({date:e.target.value});
  }

  goBack(){
    var c=document.getElementById("content");
    ReactDOM.render(<Index5/>,c);
  }

  handlePost(){
    var auth = window.sessionStorage.getItem('token');
  var uname = window.sessionStorage.getItem('uname');
 console.log(auth+"//////");
 console.log(uname+"/////");

    fetch('http://localhost:9000/Surveys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          "Accept" :"application/json",
        "Authentication" : auth,
      "id" : uname
      },
      body: JSON.stringify({
        sname: this.state.sname,
        sdescription: this.state.sdescription,
        date:this.state.date
      })
    })
    alert("new survey created");



  }

  render() {
    return (
      <div className="Index6">
      <center>
      &nbsp;&nbsp;<h1>Survey details</h1><br/>
      <div className=" newsurveycreate w3-container">

      <br/><br/>
      <div className="col-sm-6" ><label>Name</label></div><div className="col-sm-4" ><input type="text" id="name" value = {this.state.sname} onChange = {this.updatename} className="ghk w3-input" ref="name" placeholder="surveyname"  /><br/><br/></div>
      <div className="col-sm-6" ><label>Description</label></div><div className="col-sm-4" ><input type="text" value ={this.state.sdescription} onChange = {this.updatedescription} mode="multiline" ref="description" className="ghk w3-input" placeholder="description"/><br/><br/></div>
      <div className="col-sm-6" ><label>Date</label></div><div className="col-sm-4" ><input type="date" value ={this.state.date} onChange = {this.updatedate} className="ghk w3-input" ref="date" placeholder="dd-mm-yyyy"/></div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <button  className="b6 w3-btn w3-round-large w3-large" onClick={()=>this.handlePost()}>Create</button>&nbsp;&nbsp;
      <button  className="b6 w3-btn w3-round-large w3-large" onClick={()=>this.goBack()}><i className="fa fa-backward"></i> Back</button><br/><br/>


      </div>

      </center><br/><br/>
      </div>
    )
  }
}
export default Index6;
