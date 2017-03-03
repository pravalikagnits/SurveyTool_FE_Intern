import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './Index5.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import './UserLog.css';

class UserLog1 extends Component {

  constructor() {
                              super();
                        this.state = {surveys:[]};
                        this.createnewsurvey=this.createnewsurvey.bind(this);
                }
                createnewsurvey(){
                       var c=document.getElementById("content");
                       ReactDOM.render(<Index6/>,c);
                }

                 handleanchor(){

                 }


                 componentWillMount(){

                         fetch(`http://localhost:9000/`)
                      .then(response => response.json())
                        .then(json=>this.setState({surveys:json}))

                 }


  render() {
    return (


          <div className="surveymain w3-container">


                   <div><center>
                   <br/>
                   <table className="moduleSection">
                       <tr> <th>Survey Name</th>  <th>Survey Description</th>  <th>Deadline</th> </tr>
                              {this.state.surveys.length ?
                              this.state.surveys.map((item,i)=>  <tr >
                                                                    <td className="td1">
                                                                        <input type="checkbox" value={item.sname}/><a className="anchor" onClick={()=>this.handleanchor()}><b>{item.sname}</b></a>
                                                                    </td>
                                                                    <td className="td1" >{item.sdescription}</td>
                                                                    <td className="td1">{item.date}</td>
                                                              </tr>

                              )
                              : <p> loading..</p>
                            }
                    </table>

                    <br/>

                   <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.AddNewFeature()}>Create New Survey</button>&nbsp;&nbsp;&nbsp;

                   </center></div>


             </div>



           );
}
}


export default UserLog1;
