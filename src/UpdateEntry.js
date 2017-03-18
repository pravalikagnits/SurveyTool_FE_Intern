import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './UpdateEntry.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import Index5 from './Index5.js';

class UpdateEntry extends Component {

  constructor(props) {
                        super(props);
                  this.state = {surveys:[],};

                  this.handleUpdate=this.handleUpdate.bind(this);
                  // this.updatename=this.updatename.bind(this);
                  //   this.updatedescription=this.updatedescription.bind(this);
                  //     this.updatedate=this.updatedate.bind(this);

     }






     handleUpdate(id){
       var auth = window.sessionStorage.getItem('token');
     var uname = window.sessionStorage.getItem('uname');
        console.log(id);

                               fetch('http://localhost:9000/Surveys/'+ id, {
                                 method: 'PUT',
                                 headers: {
                                    "Content-Type": "application/json",
                                    "Accept":"application/json",
                                    "Authentication" : auth,
                                    "id" : uname
                                 },
                                 body: JSON.stringify({
                                   sname:sname.value,
                                   sdescription:sdescription.value,
                                   date:date.value
                                 })
                               })
                               alert("survey updated!!!!");

                     }

                    //  updatename(e){
                    //   this.setState({sname:e.target.value});
                    //  }
                    //  updatedescription(e){
                    //   this.setState({sdescription:e.target.value});
                    //  }
                    //  updatedate(e){
                    //   this.setState({date:e.target.value});
                    //  }
                     handleBack()
                     {
                        var c=document.getElementById("content");
                        ReactDOM.render(<Index5/>,c);

                     }

     componentWillMount(){

        fetch(`http://localhost:9000/Surveys`)
        .then(response => response.json())
        .then(json=>this.setState({surveys:json}))

     }


  render() {
      var id=this.props.sid;

      return (

        <center>
        <h2><b>Update Survey</b></h2>
            <div className="UpdateEntry w3-container">

            <br/><br/>
                  {this.props.uid}
                    <div className="col-sm-4" ><label className="l10">Name:</label></div><input type="text" id="sname" defaultValue={this.props.sname}  className="w3-input" ref="name" placeholder="surveyname"/><br/><br/>
                    <div className="col-sm-4" ><label className="l10">Description:</label></div><input type="text" id="sdescription" defaultValue ={this.props.sdesc}  mode="multiline" ref="description" className="w3-input" placeholder="description"/><br/><br/>
                    <div className="col-sm-4" ><label className="l10">Last Date:</label></div><input type="date" id="date" defaultValue={this.props.date}  className="w3-input" ref="date" placeholder="final date"/><br/><br/>
                    <button  className="button" onClick={()=>this.handleUpdate(id)}>Update</button>&nbsp;&nbsp;&nbsp;
                    <button className="button" onClick={()=>this.handleBack()}><i className="fa fa-backward"></i> Back</button>

                    <br/>

             </div>
             </center>


           );
}
}


export default UpdateEntry;
