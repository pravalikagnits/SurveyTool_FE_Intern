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
    fetch('http://localhost:9000/Surveys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
      <div className=" newsurveycreate w3-container">
      <center>

      &nbsp;&nbsp;<h1>Survey details</h1><br/><br/>

      <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="name" value = {this.state.sname} onChange = {this.updatename} className="w3-input" ref="name" placeholder="surveyname"  /><br/><br/>
      <label>Description</label>&nbsp;&nbsp;<input type="text" value ={this.state.sdescription} onChange = {this.updatedescription} mode="multiline" ref="description" className="w3-input" placeholder="description"/><br/><br/>
      <label>Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" value ={this.state.date} onChange = {this.updatedate} className="w3-input" ref="date" placeholder="dd-mm-yyyy"/><br/><br/>

      <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.handlePost()}>Create New Survey</button>&nbsp;&nbsp;
      <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.goBack()}>Back</button>

      </center>
      </div>
    )
  }
}
export default Index6;
