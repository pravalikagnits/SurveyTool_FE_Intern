import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './Index5.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import UsrNewEntry from './UsrNewEntry.js';
import UserList from './UserList'


class UserLog extends Component {

  constructor(props) {
        super(props);
        this.state = {items:[],sid:''};
        this.createnewsurvey=this.createnewsurvey.bind(this);
     }

     createnewsurvey(){
       var c=document.getElementById("content");
       ReactDOM.render(<Index6/>,c);
     }

     handleanchor(){
        var c=document.getElementById("content");
        ReactDOM.render(<UserList />,c);
     }


     componentWillMount(){

       fetch(`http://localhost:9000/Surveys`)
       .then(response => response.json())
       .then(json=>this.setState({items:json}))

     }


  render() {
      return (


          <div className="surveymain w3-container">


                   <div><center>
                   <br/>
                   <h3>List Of Surveys</h3>
                   <br/>
                    <table className="moduleSection">

                      <tr> <th>Survey Name</th>  <th>Survey Description</th>  <th>Deadline</th> </tr>
                        {this.state.items.length ?
                          this.state.items.map((item,i)=>  <tr >
                                              <td className="td1">
                                                  <a className="anchor" onClick={()=>this.handleanchor()}><b>{item.sname}</b></a>
                                              </td>
                                              <td className="td1" >{item.sdescription}</td>
                                              <td className="td1">{item.date}</td>

                                        </tr>

                                      )
                                      : <p> loading..</p>
                            }
                    </table>
      <br/>
                   </center></div>


             </div>



           );
}
}


export default UserLog;
