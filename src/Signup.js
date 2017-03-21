import React from 'react';
import ReactDOM from 'react-dom';
import './signup.css';
import Login from './Login.js';
var SHA256 = require("sha256");


//import Login from './Login.js';

class Signup extends React.Component {
  constructor(props) {
    super(props);


    this.state={data:'', passwd:'',cnfpasswd:'',res:''};

    this.validate=this.validate.bind(this);
    //this.handlesubmit=this.handlesubmit.bind(this);
  }




  componentWillUpdate(){

    fetch(`http://localhost:9000/users`)
    .then(response => response.json())
    .then(json=>this.setState({items:json}))

  }

  validate(){
    var uname = document.querySelector('input[name="username"]');
    var pwd=document.querySelector('input[name="password"]');
    var cnf=document.querySelector('input[name="confirm"]');
    var i=0,flag=0;
    var l=uname.value.length;
    var m=pwd.value.length;
    var n=cnf.value.length;
    console.log(l,m,n);

    if(uname.value==''){
      uname.setCustomValidity('please enter your username!');
      flag=1;
  }
  else{
    uname.setCustomValidity('');
    flag=0;
  }

  if(uname.value!='' && uname.value.length<5){
    uname.setCustomValidity('Username must be minimum of 5 characters!');
    flag=1;
}
else{
  uname.setCustomValidity('');
  flag=0;
}

  if(pwd.value==''){
    pwd.setCustomValidity('please enter your password!');
    flag=1;
}
else{
  pwd.setCustomValidity('');
  flag=0;

}
if(cnf.value==''){
  cnf.setCustomValidity('please retype the password!');
  flag=1;
}
else{
cnf.setCustomValidity('');
flag=0;

}
// if(pwd.value!=cnf.value){
//  this.setState({res:'passwords do not match'});
//  flag=1;}
//  else{
//    flag=0;
//  }
  console.log(flag,"flag");

    if(flag==0){

      fetch('http://localhost:9000/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json"

        },
        body: JSON.stringify({

          uname: uname.value,
          upwd:pwd.value,

        })
      }).then(response => {
        console.log(response.status);
        if(500==response.status)
        {
          alert("username already exists!!please chose a new one!!");
        }
        else if(200==response.status)
        {
          alert("succesfully registered!!you can Login now!");
        }
      })

  }




}





render(){

  return(
    <div className="SignUp">
    <br/><br/><br/><br/><center>
    <div className="Signup w3-container w3-animate-top ">
    <center>
    <br/><br/><br/>

    <form>
    <h1 className="signuptext">
    Sign Up
    <br/>
    </h1>
    <br/>
    <p>{this.state.res}</p>
  <div className="form-group">
  <input type="text" name="username" className=" w3-input" id="username"
  placeholder="Username *" id="name" required data-validation-required-message="Please enter your name."/>&nbsp;
  <p className="help-block text-danger"></p>
  </div>
  <div className="form-group">
  <input  type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" name="password" className=" w3-input" id="password"
  placeholder="Password * eg:Apple45" id="name" required data-validation-required-message="Please enter your Paasword" />
  <p className="help-block text-danger"></p>
  </div>
  <div className="form-group">
  <input  type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" name="confirm" className=" w3-input" id="confirm"
  placeholder="Password *" id="name" required data-validation-required-message="Please retype your Paasword"/>
  <p className="help-block text-danger"></p>
  </div>

  <button  className="w3-btn w3-square-large w3-large" onClick={()=>this.validate()}>Sign Up</button><br/><br/>
</form>

    </center>

    </div>
    </center>
      <br/><br/>
      </div>
  );
}
}

export default Signup;
