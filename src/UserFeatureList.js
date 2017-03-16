import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './UserFeatureList.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import UsrNewEntry from './UsrNewEntry.js';
import UpdateFeatureList from './UpdateFeatureList.js';
import UserList from './UserList.js';

class UserFeatureList extends Component {

  constructor(props) {
                        super(props);
                  this.state = {
                    Features:[],item:[],sid:'',
                  };
                  this.handleBack=this.handleBack.bind(this);

     }


     handleBack(){
       var c=document.getElementById("content");
        ReactDOM.render(<UserList />,c);
     }


     componentWillUpdate(){
                   fetch(`http://localhost:9000/Features`)
                  .then(response => response.json())
                  .then(json=>this.setState({Features:json}))
     }


     componentWillMount(){
      var  id=this.props.fid;
      console.log(id);
            fetch(`http://localhost:9000/Features/`+id)
            .then(response => response.json())
            .then(json=>this.setState({item:json}))

            console.log(this.state.item);

     }


  render() {
    return (


      <div className="UserFeatureList w3-container">
                <div className="card">

                    <div  className="container1" >

                          <img  className="image" src={this.state.item.image} alt="image not available!!"/>

                           <h3><strong>Name: {this.state.item.name}</strong></h3>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Latitude:</strong></div>
                              <div className="col-sm-6"><strong> {this.state.item.latitude}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>longitude:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.longitude}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Country:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.country}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>State:</strong></div>
                              <div className="col-sm-8"> <strong>{this.state.item.state}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>District:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.district}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Deities:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.deities}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Festivals:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.festivals}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Architecture:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.archstyle}</strong></div><br/>
                           </div>
                           <div className="row">
                              <div className="col-sm-4" ><strong>Date Built</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.datebuilt}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Creator:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.creator}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Guides:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.guides}</strong></div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-4" ><strong>Eateries:</strong></div>
                              <div className="col-sm-8"><strong> {this.state.item.eateries}</strong></div><br/>
                           </div>
                           <center>
                           <button  className="button" onClick={()=>this.handleBack()}>Back</button>&nbsp;&nbsp;&nbsp;
                           </center>



                  </div>
                </div>


      </div>




           );
}
}


export default UserFeatureList;
