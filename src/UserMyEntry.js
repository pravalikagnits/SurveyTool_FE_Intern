import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './UserMyEntry.css';
import Index6 from './Index6.js';
import UsrNewEntry from './UsrNewEntry.js';
import UserFeatureList from './UserFeatureList.js';
import UpdateFeatureList2 from './UpdateFeatureList2.js';


class UserMyEntry extends Component {

            constructor(props) {
                                  super(props);
                            this.state = {

                                MyEntries:[],
                                id:'',
                            };
               }




     componentWillMount(){
          var id=this.props.uid;
          console.log(id);
            fetch(`http://localhost:9000/users/`+id )
            .then(response => response.json())
            .then(json=>this.setState({MyEntries:json}))

            console.log(this.state.MyEntries);

     }


     componentWillUpdate(){
       var id=this.props.uid;
       fetch(`http://localhost:9000/users/`+id)
       .then(response => response.json())
       .then(json=>this.setState({MyEntries:json}))

     }

  render() {
      return (


            <div className="UserMyEntry w3-container">

                  <div> <center>
                      <br/>
                      <div className="header">
                          <p>LIST OF ENTRIES</p>
                      </div>

                      {this.state.MyEntries.length ?
                        this.state.MyEntries.map((items,i)=>
                                    <div className="card">

                                        <div key={i} className="container1" >

                                               <h3><strong><a>Name: {items.name}</a></strong></h3>
                                               <hr/>

                                               <div className="row">
                                                  <div className="col-sm-4" ><strong>Country:</strong></div>
                                                  <div className="col-sm-8"><strong> {items.name}</strong></div><br/>
                                               </div>

                                               <div className="row">
                                                  <div className="col-sm-4" ><strong>State:</strong></div>
                                                  <div className="col-sm-8"> <strong>{items.name}</strong></div><br/>
                                               </div>

                                               <div className="row">
                                                  <div className="col-sm-4" ><strong>District:</strong></div>
                                                  <div className="col-sm-8"><strong> {items.name}</strong></div><br/>
                                               </div>


                                      </div>
                                    </div>

                                  )
                                  : <p> loading..</p>
                                }

                    <br/>
                  </center></div>

            </div>

           );


}
}


export default UserMyEntry;
