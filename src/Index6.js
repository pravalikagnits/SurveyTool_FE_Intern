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

  }




  goBack(){
    var c=document.getElementById("content");
    ReactDOM.render(<Index5/>,c);
  }

  handlePost(e){
    var auth = window.sessionStorage.getItem('token');
  var uname = window.sessionStorage.getItem('uname');

      var name = document.querySelector('input[name="name"]');
      var description=document.querySelector('input[name="description"]');
      var date=document.querySelector('input[name="date"]');

      var i=0,flag=0;
      var l=name.value.length;
      var m=description.value.length;
      var n=date.value.length;
      console.log(l,m,n);

      if(name.value==''){
        name.setCustomValidity('please enter surveyname!');
        flag=1;
    }
    else{
      name.setCustomValidity('');
      flag=0;
    }
    if(description.value==''){
      description.setCustomValidity('please enter survey description!');
      flag=1;
  }
  else{
  description.setCustomValidity('');
    flag=0;
  }
  if(date.value==''){
    date.setCustomValidity('please enter the last date!');
    flag=1;
}
else{
  date.setCustomValidity('');
  flag=0;
}


    console.log(flag,"flag");

      if(flag==0){


    fetch('http://localhost:9000/Surveys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
          "Accept" :"application/json",
        "Authentication" : auth,
      "id" : uname
      },
      body: JSON.stringify({
        sname: name.value,
        sdescription: description.value,
        date:date.value
      })
    })
              alert("entry added");
              var c=document.getElementById("content");
              ReactDOM.render(<Index5/>,c);


  }



  }

  render() {
    return (
      <div className="index6">
      <center>
      &nbsp;&nbsp;<h1>Survey details</h1><br/><br/>

      <div className=" newsurveycreate w3-container">
      <br/><br/>
      <form>

      <div className="form-group">
      <label>Name</label><input type="text" id="name" className="ghk w3-input" name="name" placeholder="surveyname" required data-validation-required-message="Please enter your name." /><br/><br/>
      <p className="help-block text-danger"></p>
      </div>
      <div className="form-group">
      <label>Description</label><input type="text"  mode="multiline" id="description" name="description" className="ghk w3-input" placeholder="description" required data-validation-required-message="Please enter your name."/><br/><br/>
      <p className="help-block text-danger"></p>
      </div>
      <div className="form-group">
      <label>Date</label><input type="date" className="ghk w3-input" id="date" name="date" placeholder="dd-mm-yyyy" required data-validation-required-message="Please enter your name."/><br/><br/><br/>
      <p className="help-block text-danger"></p>
      </div>
      <button  className="b6 w3-btn w3-round-large w3-large" onClick={()=>this.handlePost()}>Create</button>&nbsp;&nbsp;
      <button  className="b6 w3-btn w3-round-large w3-large" onClick={()=>this.goBack()}><i className="fa fa-backward"></i> Back</button>
      <br/>
      <br/>

      </form>
      </div>
<br/><br/>
      </center>
      </div>
    )
  }
}
export default Index6;
