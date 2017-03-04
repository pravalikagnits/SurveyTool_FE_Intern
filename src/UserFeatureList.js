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






     //
     //
    //  handleUpdate(fid,name,lat,long,country,state,district,deities,festivals,archstyle,datebuilt,image,creator,guides,eateries){
    //     this.state.fid=fid
    //     this.state.name=name;
    //     this.state.lat=lat;
    //     this.state.long=long;
    //     this.state.country=country;
    //     this.state.state=state;
    //     this.state.district=district;
    //     this.state.deities=deities;
    //     this.state.festivals=festivals;
    //     this.state.archstyle=archstyle;
    //     this.state.datebuilt=datebuilt;
    //     this.state.image=image;
    //     this.state.creator=creator;
    //     this.state.guides=guides;
    //     this.state.eateries=eateries;
     //
    //    console.log("UserFeatureList",this.state.fid);
    //    var c=document.getElementById("content");
    //    ReactDOM.render(<UpdateFeatureList fid={this.state.fid} name={this.state.name} latitude={this.state.lat} longitude={this.state.long} country={this.state.country} state={this.state.state} district={this.state.district} festivals={this.state.festivals}  deities={this.state.deities} archstyle={this.state.archstyle}
    //      datebuilt={this.state.datebuilt}  image={this.state.image} creator={this.state.creator} guides={this.state.guides} eateries={this.state.eateries}  />,c);
     //
    //  }


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
                           <button  className="w3-btn w3-round-large w3-large button2" onClick={()=>this.handleBack()}>Back</button>&nbsp;&nbsp;&nbsp;
                           </center>



                  </div>
                </div>


      </div>




           );
}
}


export default UserFeatureList;
