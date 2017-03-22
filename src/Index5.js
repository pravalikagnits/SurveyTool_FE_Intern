import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Index5.css';
import Index6 from './Index6.js';

import UserFeatureList from './UserFeatureList.js';
import UpdateEntry from './UpdateEntry.js';
import AdminList  from './AdminList.js';

class Index5 extends Component {

  constructor() {
    super();
    this.state = {surveys:[],id:'',ssid:'',name:'',desc:'',date:''};
    this.createnewsurvey=this.createnewsurvey.bind(this);
    this.handleanchor=this.handleanchor.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);

  }



  createnewsurvey(){
    var c=document.getElementById("content");
    ReactDOM.render(<Index6/>,c);
  }

  handleanchor(id){
     this.state.ssid=id;
     console.log(this.state.ssid);
     var c=document.getElementById("content");
     ReactDOM.render(<AdminList sid={this.state.ssid}/>,c);

   }

  componentWillUpdate(){
    fetch(`http://localhost:9000/Surveys`)
    .then(response => response.json())
    .then(json=>this.setState({surveys:json}))
  }


  handleDelete(id){
    var auth = window.sessionStorage.getItem('token');
  var uname = window.sessionStorage.getItem('uname');
 console.log(auth+"//////");
 console.log(uname+"/////");

    var r = confirm("Move to Trash!");
    if (r == true) {


      console.log(id);
      fetch('http://localhost:9000/Surveys/'+ id, {

        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json",
          "Authentication" : auth,
          "id" : uname
        },
        method: "DELETE"

      })
      .then(function(items){
        alert("deleted from the database",id);
      })
      .catch(function(error){
        alert('error!!! cannot be deleted',error);
      });
    }
    else {
      alert("cancelled!!!!");
    }



  }

  handleUpdate(id,name,desc,date){
    this.state.id=id;
    this.state.name=name;
    this.state.desc=desc;
    this.state.date=date;
    console.log("index5:",this.state.id);
    var c=document.getElementById("content");
    ReactDOM.render(<UpdateEntry sid={this.state.id} sname={this.state.name} sdesc={this.state.desc} date={this.state.date}/>,c);

  }




  componentWillMount(){

    fetch(`http://localhost:9000/Surveys`)
    .then(response => response.json())
    .then(json=>this.setState({surveys:json}))

  }


  render() {
    return (
      <center>

            <div className="SurveyMain"><br/>
            <h1><b>LIST OF SURVEYS</b></h1>
<center>

      <div className="surveymain w3-container">


      <br/>
      <center>
      &nbsp;<table className="moduleSection">
      <tbody className="border">
      <tr> <th><center>Survey Name</center></th>  <th><center>Survey Description</center></th>  <th><center>Deadline</center></th></tr>
      {this.state.surveys.length ?
        this.state.surveys.map((item,i)=>  <tr >
        <td className="td1">
        <a className="anchor" onClick={()=>this.handleanchor(item.sid)}><b>{item.sname}</b></a>
        </td>
        <td className="td1" >{item.sdescription}
        </td>
        <td className="td1">{item.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button className="delete" onClick={()=>this.handleDelete(item.sid)}><i className="fa fa-close"></i></button>
        &nbsp;&nbsp;<button className="update" onClick={()=>this.handleUpdate(item.sid,item.sname,item.sdescription,item.date)}><i className="fa fa-refresh "></i></button></td>

        </tr>

      )
      : <p> loading..</p>
    }
    </tbody>
    </table>
    <br/>
    <button  className="b4 w3-btn w3-round-large w3-large" onClick={()=>this.createnewsurvey()}>Create New Survey</button>&nbsp;&nbsp;&nbsp;

    </center>
    <br/>

    </div>
    </center><br/>
    </div>

    </center>



  );
}
}


export default Index5;
