import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './UserLog.css';
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

       console.log(this.props.uid);
        var c=document.getElementById("content");
        ReactDOM.render(<UserList uid={this.props.uid}/>,c);
     }


     componentWillMount(){

       fetch(`http://localhost:9000/Surveys`)
       .then(response => response.json())
       .then(json=>this.setState({items:json}))

     }


  render() {
      return (
<center>
              <div className="SurveyList">
                <center>

          <div className="surveymain w3-container">


                   <div><center>
                   <br/>
                   <h1><b>LIST OF SURVEYS</b></h1>
                   <br/><center>
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
      <br/></center>
                   </center></div>

                   </div>
                  </center>
             </div>
</center>



           );
}
}


export default UserLog;
