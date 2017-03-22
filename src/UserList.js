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
      sid:'',
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
    console.log(this.state.sid,"sid in user lisst");
    var c=document.getElementById("content");
    ReactDOM.render(<UsrNewEntry sid={this.state.sid} uid={this.props.uid}/>,c);
  }


  handleView(id){
    console.log(id,"idvvfevfebe");
    this.state.id=id;
    var c=document.getElementById("content");
    ReactDOM.render(<UserFeatureList fid={this.state.id}/>,c);

  }



  handleUpdate(fid,sid,name,lat,long,country,state,district,landmark,image,others){
    this.state.fid=fid
    this.state.name=name;
    this.state.lat=lat;
    this.state.long=long;
    this.state.country=country;
    this.state.state=state;
    this.state.district=district;
    this.state.sid=sid;

    this.state.landmark=landmark;
    this.state.image=image;
    this.state.others=others;

    console.log("UserFeatureList",this.state.id);
    var c=document.getElementById("content");
    ReactDOM.render(<UpdateFeatureList2 fid={this.state.fid} sid={this.state.sid} name={this.state.name} latitude={this.state.lat} longitude={this.state.long} country={this.state.country} state={this.state.state} district={this.state.district} landmark={this.state.landmark}
     image={this.state.image} others={this.state.others} />,c);

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
        this.state.Features.map((item,i)=>(item.sid == this.props.sid?


                  <div className="card">

                  <div key={i} className="container1" >

                  <div className="grid">
                  <figure>
                    <img  className="image12" src={item.image} alt="image not available!!"/>&nbsp;&nbsp;
                    </figure>
                  </div>


                        <h2>
                  <strong><a className="aname" onClick={() => this.handleView(item.fid)}>Name: {item.name}</a></strong><button  className="b9 w3-btn w3-round-large w3-large  button1"disabled={(item.uname==window.sessionStorage.getItem('uname'))?false:true}  onClick={()=>this.handleUpdate(item.fid,item.sid,item.name,item.latitude,item.longitude,
                    item.country,item.state,item.district,item.landmark,item.image,item.others)}><i className="fa fa-refresh "></i></button>&nbsp;&nbsp;



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
                    :<p></p>
                              )

        )
        : <p> loading..</p>
      }

      <br/>
      </center></div>

      <center>

                  <button className="b41 w3-btn w3-round-large w3-large" onClick={()=>this.AddNewEntry(this.props.sid)}><i className="fa fa-plus-circle"></i> Add Entry</button><br/><br/><br/>
      </center>
      </div>

    );


  }
}


export default UserList;
