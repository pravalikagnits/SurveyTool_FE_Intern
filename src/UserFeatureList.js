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


      <div className="UserFeatureList w3-container"><br/>
                <div className="card">

                    <div  className="container1" >
                    <table className="abcdef">
                    <tbody className="fgh">
                    <td className="tdata3">


                           <h3><strong>Name: {this.state.item.name}</strong></h3>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Latitude:</strong></div>
                              <div className="col-sm-6">{this.state.item.latitude}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Longitude:</strong></div>
                              <div className="col-sm-6">{this.state.item.longitude}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Country:</strong></div>
                              <div className="col-sm-6">{this.state.item.country}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>State:</strong></div>
                              <div className="col-sm-6"> {this.state.item.state}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>District:</strong></div>
                              <div className="col-sm-6">{this.state.item.district}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Deities:</strong></div>
                              <div className="col-sm-6">{this.state.item.deities}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Festivals:</strong></div>
                              <div className="col-sm-6">{this.state.item.festivals}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Architecture:</strong></div>
                              <div className="col-sm-6">{this.state.item.archstyle}</div><br/>
                           </div>
                           <div className="row">
                              <div className="col-sm-6" ><strong>Date Built</strong></div>
                              <div className="col-sm-6"> {this.state.item.datebuilt}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Creator:</strong></div>
                              <div className="col-sm-6">{this.state.item.creator}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Guides:</strong></div>
                              <div className="col-sm-6">{this.state.item.guides}</div><br/>
                           </div>

                           <div className="row">
                              <div className="col-sm-6" ><strong>Eateries:</strong></div>
                              <div className="col-sm-6">{this.state.item.eateries}</div><br/>
                           </div>
                           </td>
                           <td className="tdata4">
                           <div className="grid2">
                             <figure>
                             <img  className="image1" src={this.state.item.image} alt="image not available!!"/>
                             </figure>
                           </div>
                           </td>
                           </tbody>
                           </table>


                  </div>

                </div>
                <center>
                <button  className="b40" onClick={()=>this.handleBack()}><i className="fa fa-backward"></i> Back</button>&nbsp;&nbsp;&nbsp;
                </center>
                <br/>

      </div>




           );
}
}


export default UserFeatureList;
