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
    this.updateState=this.updateState.bind(this);
    this.updatePasswd=this.updatePasswd.bind(this);
    this.updatecnfPasswd=this.updatecnfPasswd.bind(this);
    this.validate=this.validate.bind(this);
    //this.handlesubmit=this.handlesubmit.bind(this);
  }

  updateState(e){
    this.setState({data:e.target.value});
  }

  updatePasswd(e){
    this.setState({passwd:e.target.value});
  }

  updatecnfPasswd(e){
    this.setState({cnfpasswd:e.target.value});
  }


  componentWillUpdate(){

    fetch(`http://localhost:9000/users`)
    .then(response => response.json())
    .then(json=>this.setState({items:json}))

  }

  validate(username,password,confirmp){



    var l=username.length;
    var m=password.length;
    var n=confirmp.length;

    if(username==''|| password==''||confirmp=='')
    this.setState({res:'username or password cannot be empty'})
    else if(l<5 && username!='')
    this.setState({res:'username is too short(min 8 char)'})
    else if((m < 5 || n < 5)&&(password!=''&&confirmp!=''))
    this.setState({res:'password too short'})
    else if(password!=confirmp)
    this.setState({res:'password doesnt match'})
    else{

      fetch('http://localhost:9000/users', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json"

        },
        body: JSON.stringify({

          uname: this.state.data,
          upwd:this.state.passwd,

        })
      }).then(alert('Successful registation!!you can login now!!')
    )
  }




}





render(){

  return(
    <div className="SignUp">
    <br/><br/>><center>
    <div className="Signup w3-container w3-animate-top ">
    <center>
    <br/>

    <form>
    <h1 className="signuptext">
    Sign Up
    <br/>
    </h1>
    <br/>
    <p>{this.state.res}</p>
    <input type="text" id="username" value = {this.state.data} onChange = {this.updateState} className="w3-input" placeholder="username"  /><br/><br/>
    <input type="password" id="password" value ={this.state.passwd} onChange = {this.updatePasswd} className="w3-input" placeholder="password" /><br/><br/>
    <input type="password" id="confirm" value ={this.state.cnfpasswd} onChange = {this.updatecnfPasswd} className="w3-input" placeholder="confirm password"  /><br/><br/>
    <button  className="w3-btn w3-square-large w3-large" onClick={()=>this.validate(this.state.data,this.state.passwd,this.state.cnfpasswd)}>Sign Up</button><br/><br/>

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
