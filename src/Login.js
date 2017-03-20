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
      data:'', passwd:'',res:'',user:''
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
    var status ;
var dupJson;
fetch('http://localhost:9000/users/validate/'+username+"?upwd="+password)
.then(response => {
    if(200 == response.status){
      response.json().then((data) => {
            this.setState({user:data});
            //console.log(this.state.admin[0].token);
            if(this.state.user[0].uname=="admin")
            {
              var c=document.getElementById("content");
                   ReactDOM.render(<Index5 />,c);

            }
            else{
            var c=document.getElementById("content");
                 ReactDOM.render(<UserLog />,c);
               }

            console.log("Success");
            window.sessionStorage.setItem('token', this.state.user[0].token);
            window.sessionStorage.setItem('uname', this.state.user[0].uname);
            console.log(window.sessionStorage.getItem('token')+"//////"+window.sessionStorage.getItem('uname'));

        });
      }
      else {
        window.alert("Invalid Username or Password ");
        document.getElementById("password").value = '';
      }

  })

    .catch(error => console.log(error));
  console.log(document.getElementById("mn").innerHTML);
    if(document.getElementById("mn").innerHTML=="LOGIN")
    document.getElementById("mn").innerHTML="LOGOUT";
    else {
        document.getElementById("mn").innerHTML="LOGIN";

    }


    //  var i,flag=0;
    //  for(i=0;i<this.state.items.length;i++){
    //    if(username =="admin" && password =="123"){
    //      flag=1;
    //      console.log(SHA256(password));
    //      var c=document.getElementById("content");
    //      ReactDOM.render(<Index5 />,c);
    //      break;
    //    }
    //    else if(username==this.state.items[i].uname)
    //    {
    //      var salt=this.state.items[i].salt;
    //        var repeat=this.state.items[i].num;
    //      console.log(salt);
    //      var sec_pass=SHA256(password+salt);
     //
    //      for(var j=1;j<repeat;j++)
    //      {
    //        var sec_pass=SHA256(sec_pass +salt);
    //      }
     //
    //      if(sec_pass==this.state.items[i].upwd){
    //        flag=1;
     //
    //        var c=document.getElementById("content");
    //        ReactDOM.render(<UserLog uid={this.state.items[i].uid}/>,c);
    //        break;
    //      }
    //    }
     //
     //
    //  }
    //  if(flag==0)
    //  alert("please check your username or password!!");

   }



  render(){

    return(
      <div className="Login">
      <br/><br/><center>
      <div className="loginpage w3-container w3-animate-top">
      <center>
     <br/>  
      <img  className="image" src='/src/images/default-user.png' alt="image not available!!"/>

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
