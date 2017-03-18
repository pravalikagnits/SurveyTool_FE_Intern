import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './UserList.css';
import UserLog from './UserLog.js';
import Index6 from './Index6.js';
import UsrNewEntry from './UsrNewEntry.js';
import UserFeatureList from './UserFeatureList.js';
import UpdateFeatureList2 from './UpdateFeatureList2.js';



class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Features:[],
      details:[],
      id:'',
    };

    this.handleView=this.handleView.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
    this.AddNewEntry=this.AddNewEntry.bind(this);
    this.handleBack=this.handleBack.bind(this);

  }
  handleBack(){

    var c=document.getElementById("content");
    ReactDOM.render(<UserLog/>,c);
  }




  AddNewEntry(id){
    this.state.sid=id;
    console.log(this.state.sid);
    console.log(this.props.uid);
    var c=document.getElementById("content");
    ReactDOM.render(<UsrNewEntry sid={this.state.sid} uid={this.props.uid}/>,c);
  }


  handleView(id){
    console.log(id);
    this.state.id=id;
    var c=document.getElementById("content");
    ReactDOM.render(<UserFeatureList fid={this.state.id}/>,c);

  }



  handleUpdate(fid,name,lat,long,country,state,district,deities,festivals,archstyle,datebuilt,creator,image,guides,eateries){
    this.state.fid=fid
    this.state.name=name;
    this.state.lat=lat;
    this.state.long=long;
    this.state.country=country;
    this.state.state=state;
    this.state.district=district;
    this.state.deities=deities;
    this.state.festivals=festivals;
    this.state.archstyle=archstyle;
    this.state.datebuilt=datebuilt;
    this.state.creator=creator;
    this.state.image=image;
    this.state.guides=guides;
    this.state.eateries=eateries;

    console.log("UserFeatureList",this.state.id);
    var c=document.getElementById("content");
    ReactDOM.render(<UpdateFeatureList2 fid={this.state.fid} name={this.state.name} latitude={this.state.lat} longitude={this.state.long} country={this.state.country} state={this.state.state} district={this.state.district} festivals={this.state.festivals}  deities={this.state.deities} archstyle={this.state.archstyle}
      datebuilt={this.state.datebuilt} creator={this.state.creator} image={this.state.image} guides={this.state.guides} eateries={this.state.eateries}  />,c);

    }


    componentWillMount(){

      fetch(`http://localhost:9000/Features`)
      .then(response => response.json())
      .then(json=>this.setState({Features:json}))
      // console.log(this.state.Features)
      var auth = window.sessionStorage.getItem('token');
      var uname = window.sessionStorage.getItem('uname');
      var entry;
      var that=this;

      console.log(uname);





  }
  componentDidMount(){
     var uname = window.sessionStorage.getItem('uname');

    console.log(uname);
    console.log(this.state.Features.uname);
  }


  componentWillUpdate(){
    fetch(`http://localhost:9000/Features`)
    .then(response => response.json())
    .then(json=>this.setState({Features:json}))

  }

  render() {
    return (


      <div className="UserList w3-container">
      {this.state.Features.name}

      <div>
                      <div className="header"><br/>
                          <button className="back1" onClick={()=>this.handleBack()}><center><i className="abc fa fa-backward"></i></center></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <center>
                          <h1>LIST OF ENTRIES</h1>
                          </center>
                      </div>

                      <center>

      {this.state.Features.length ?
        this.state.Features.map((item,i)=>

                  <div className="card">

                  <div key={i} className="container1" >

                  <div className="grid">
                  <figure>
                    <img  className="image12" src={item.image} alt="image not available!!"/>&nbsp;&nbsp;
                    </figure>
                  </div>


                        <h2>
                  <strong><a className="aname" onClick={() => this.handleView(item.fid)}>Name: {item.name}</a></strong><button  className="b9 w3-btn w3-round-large w3-large  button1"disabled={(item.uname==window.sessionStorage.getItem('uname'))?false:true}  onClick={()=>this.handleUpdate(item.fid,item.name,item.latitude,item.longitude,item.country,item.state,
                    item.district,item.deities,item.festivals,item.archstyle,item.datebuilt,item.creator,item.image,
                    item.guides,item.eateries)}><i className="fa fa-refresh "></i></button>&nbsp;&nbsp;



                    <p className="Name" >~{item.uname}</p>
                    </h2>


                    <div className="col-sm-4" ><strong>Country:</strong></div>
                    <div className="col-sm-4"> {item.country}</div><br/>



                    <div className="col-sm-4" ><strong>State:</strong></div>
                    <div className="col-sm-4"> {item.state}</div><br/>



                    <div className="col-sm-4" ><strong>District:</strong></div>
                    <div className="col-sm-4">{item.district}</div><br/>


                      </div>
                    </div>

        )
        : <p> loading..</p>
      }

      <br/>
      </center></div>

      <center>

                  <button className="b41 w3-btn w3-round-large w3-large" onClick={()=>this.AddNewEntry()}><i className="fa fa-plus-circle"></i> Add Entry</button><br/><br/><br/>
      </center>
      </div>

    );


  }
}


export default UserList;
