import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './UserMyEntry.css';
import './UserFeatureList.css';
import Index6 from './Index6.js';
import UsrNewEntry from './UsrNewEntry.js';
import UserFeatureList from './UserFeatureList.js';
import UpdateFeatureList2 from './UpdateFeatureList2.js';

  var xyz;
class UserMyEntry extends Component {

            constructor(props) {
                                  super(props);
                            this.state = {

                                MyEntries:[],
                                id:'',
                            };
                              this.some=this.some.bind(this);
               }




     componentDidMount(){
       var auth = window.sessionStorage.getItem('token');
     var uname = window.sessionStorage.getItem('uname');
     var entry;
     var that=this;

     console.log(uname);
            fetch(`http://localhost:9000/users/`+ uname )
            .then(response => response.json().then((data)=>{
              that.setState({MyEntries:data});
              console.log("bi",that.state.MyEntries);
              xyz=that.state.MyEntries;

            })
          );





     }

     some()
     {
        //  console.log("hi",xyz);
        //  document.getElementById("ab").value=xyz.features.length;
        var i=0,detail;
        var entry=document.getElementById("xx");

        for(i=0;i<xyz.features.length;i++)
        {
          detail="<div style=\"color:red;width:50px;box-shadow: 0 4px 8px 0 rgba(245,255,250,0.2);\">uname="+xyz.uname+"<br/>no:"+xyz.features.length+"</div>";
        }
        entry.innerHTML=detail;



     }




  render() {
      return (


            <div className="UserMyEntry w3-container">


                      <button className="w3-btn w3-round-large w3-large" onClick={()=>this.some()}>My Entries</button>
                      <input type="text" id="ab"/>
                    <div id="xx"></div>
                    <div className="UserFeatureList w3-container">
                              <div className="card">

                                  <div  className="container1" >

                                        <img  className="image" src="" alt="image not available!!"/>

                                         <h3><strong>Name:</strong></h3>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Latitude:</strong></div>
                                            <div className="col-sm-6"><strong></strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>longitude:</strong></div>
                                            <div className="col-sm-8"><strong> </strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Country:</strong></div>
                                            <div className="col-sm-8"><strong> </strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>State:</strong></div>
                                            <div className="col-sm-8"> <strong></strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>District:</strong></div>
                                            <div className="col-sm-8"><strong></strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Deities:</strong></div>
                                            <div className="col-sm-8"><strong></strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Festivals:</strong></div>
                                            <div className="col-sm-8"><strong> </strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Architecture:</strong></div>
                                            <div className="col-sm-8"><strong> </strong></div><br/>
                                         </div>
                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Date Built</strong></div>
                                            <div className="col-sm-8"><strong></strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Creator:</strong></div>
                                            <div className="col-sm-8"><strong> </strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Guides:</strong></div>
                                            <div className="col-sm-8"><strong></strong></div><br/>
                                         </div>

                                         <div className="row">
                                            <div className="col-sm-4" ><strong>Eateries:</strong></div>
                                            <div className="col-sm-8"><strong> </strong></div><br/>
                                         </div>
                                         <center>
                                        </center>



                                </div>
                              </div>


                    </div>




            </div>

           );


}
}


export default UserMyEntry;
