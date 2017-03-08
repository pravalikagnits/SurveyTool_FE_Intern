import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import Mapp from './Mapp.js';
import Index5 from './Index5.js'
import icons from './icons';
import Adminpage from './Adminpage.js';
import App from './App.js';
import UserLog from './UserLog.js';
import GoogleMap from './GoogleMap.js';

var SHA256 = require("sha256");



class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      items:[],
      data:'', passwd:'',res:''
    };
    this.updateState=this.updateState.bind(this);
    this.updatePasswd=this.updatePasswd.bind(this);
    this.validate=this.validate.bind(this);
  }


  updateState(e){
    this.setState({data:e.target.value});
  }

  updatePasswd(e){
    this.setState({passwd:e.target.value});
  }

  componentWillMount(){

    fetch(`http://localhost:9000/users`)
    .then(response => response.json())
    .then(json=>this.setState({items:json}))

  }

  validate(username,password){

     var i,flag=0;
     for(i=0;i<this.state.items.length;i++){
       if(username =="admin" && password =="123"){
         flag=1;
         console.log(SHA256(password));
         var c=document.getElementById("content");
         ReactDOM.render(<Index5 />,c);
         break;
       }
       else if(username==this.state.items[i].uname)
       {
         var salt=this.state.items[i].salt;
           var repeat=this.state.items[i].num;
         console.log(salt);
         var sec_pass=SHA256(password+salt);

         for(var j=1;j<repeat;j++)
         {
           var sec_pass=SHA256(sec_pass +salt);
         }

         if(sec_pass==this.state.items[i].upwd){
           flag=1;

           var c=document.getElementById("content");
           ReactDOM.render(<UserLog uid={this.state.items[i].uid}/>,c);
           break;
         }
       }


     }
     if(flag==0)
     alert("please check your username or password!!");

   }



  render(){

    return(
      <div className="Login">
      <br/><br/><br/><br/><center>
      <div className="loginpage w3-container w3-animate-top">
      <center>
      <br/>  <br/><br/> <br/>

      <h1 id="title" className="logintext" >Login</h1>
      <br/>

      <input type="text" id="username"
      value = {this.state.data} onChange = {this.updateState}
      className="w3-input" placeholder="username"  /><br/><br/>


      <input type="password" id="password"
      value ={this.state.passwd} onChange = {this.updatePasswd}
      className="w3-input" placeholder="password"/><br/><br/>


      <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.validate(this.state.data,this.state.passwd)}>Login</button>

      <br/>
      <br/>

      </center>
      </div>
      <br/><br/>
      </center>
      </div>
    );
  }
}

export default Login;
