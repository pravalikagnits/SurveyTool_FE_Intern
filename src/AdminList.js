import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminList.css';
import Index5 from './Index5.js';
import Index6 from './Index6.js';
import UsrNewEntry from './UsrNewEntry.js';
import AdminFeatureList from './AdminFeatureList.js';
import UpdateFeatureList from './UpdateFeatureList.js';
import jsonreport from './jsonreport.js';
var ssid;
var  latLng;
class AdminList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Features:[],
      details:[],
      id:'',
      sid:'',
      report:'',
    };

    this.handleView=this.handleView.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.mapview=this.mapview.bind(this);
    this.exportGeoJson=this.exportGeoJson.bind(this);
    this.handleBack=this.handleBack.bind(this);
  }

  handleBack(){
    var c=document.getElementById("content");
    ReactDOM.render(<Index5 />,c);
  }


  handleView(id,sid){
    console.log(id);
    this.state.id=id;
    this.state.sid=sid;
    var c=document.getElementById("content");
    ReactDOM.render(<AdminFeatureList fid={this.state.id} sid={this.state.sid}/>,c);

  }


  handleDelete(id){
    var auth = window.sessionStorage.getItem('token');
    var uname = window.sessionStorage.getItem('uname');

    var r = confirm("Move to Trash!");
    if (r == true) {

      console.log(id);
      fetch('http://localhost:9000/Features/'+ id, {

        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json",
          "Authentication" : auth,
          "id" : uname
        },
        method: "DELETE"

      })
      .then(function(items){
        alert("deleted from the database",id);
      })
      .catch(function(error){
        alert('error!!! cannot be deleted',error);
      });
    }
    else{
      alert("cancelled!!!");
    }



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
    ReactDOM.render(<UpdateFeatureList fid={this.state.fid} sid={this.state.sid} name={this.state.name} latitude={this.state.lat} longitude={this.state.long} country={this.state.country} state={this.state.state} district={this.state.district} landmark={this.state.landmark}
     image={this.state.image} others={this.state.others} />,c);

    }


    componentWillMount(){

      fetch(`http://localhost:9000/Features`)
      .then(response => response.json())
      .then(json=>this.setState({Features:json}))
      // console.log(this.state.Features)

    }


    componentWillUpdate(){
      fetch(`http://localhost:9000/Features`)
      .then(response => response.json())
      .then(json=>this.setState({Features:json}))

    }

    mapview(){
      console.log(this.state.Features);
      var infoWindow = new google.maps.InfoWindow();
      var mapOptions = {
        center: new google.maps.LatLng(this.state.Features[0].latitude,this.state.Features[0].longitude),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(document.getElementById("map1"), mapOptions);

      var i=0;
      var json=new Array();
      console.log(this.state.Features.length,"gjhg",this.state.Features[5].sid);
      var snid=this.props.sid;
       console.log(snid,"snid");

      for(i=0;i<this.state.Features.length  ;i++)
      {
            var j=0;

        if(this.state.Features[i].sid == snid){

        console.log("prift",this.state.Features[i].sid,snid);
        json[j++]={lat:this.state.Features[i].latitude,long:this.state.Features[i].longitude,name:this.state.Features[i].name,image:this.state.Features[i].image}
      }
      }
      console.log(json,"list");
      console.log(json.length,"length");

      for (var i = 0, length = json.length; i < length; i++) {
        var data = json[i];
        console.log(json[i]);
        latLng = new google.maps.LatLng(data.lat, data.long);

        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: data.name,
          // animation: google.maps.Animation.BOUNCE
        });


        (function(marker, data) {
          var contents='<img src='+data.image+' alt="image" id="simage"/><br/><br/>'+'<b>Name:</b>'+data.name+'<br/><b>Latitude:</b>'+data.lat+'<br/><b>Longitude:</b>'+data.long+' ';

          // Attaching a click event to the current marker
          google.maps.event.addListener(marker, "click", function(e) {
            infoWindow.setContent(contents);
            infoWindow.open(map, marker);
          });

        })(marker, data);

      }


    }
    exportGeoJson() {

      var snid=this.props.sid;
      var j=0;
      console.log("hiymktm,t");
      var json=new Array();
      var geoJson = {
        "type": "FeatureCollection",
        "features": []
      };

      for (var i = 0; i<this.state.Features.length;i++) {
        var polylineFeature = {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": []
          },
          "properties": {}
        };
        if(this.state.Features[i].sid == snid){

        json[j++]={lat:this.state.Features[i].latitude,long:this.state.Features[i].longitude,name:this.state.Features[i].name,country:this.state.Features[i].country,state:this.state.Features[i].state,district:this.state.Features[i].district,deities:this.state.Features[i].deities,
          festivals:this.state.Features[i].festivals,archstyle:this.state.Features[i].archstyle,datebuilt:this.state.Features[i].datebuilt,creator:this.state.Features[i].creator,guides:this.state.Features[i].guides,eateries:this.state.Features[i].eateries}
          console.log(json.length,"export");
          for( var k=0;k<json.length;k++){
        polylineFeature.geometry.coordinates.push(
          json[k].long,json[k].lat
        );
        polylineFeature.properties={"marker-color": "#ff0000",
        "marker-size": "medium",
        "marker-symbol": "religious-jewish","name:":json[k].name,"country":json[k].country,"state":json[k].state,"district":json[k].district,"landmark":json[k].landmark,
        "others":json[k].others};
        geoJson.features.push(polylineFeature);
      }
      }
    }
      var geojson=JSON.stringify(geoJson,null,4);
      console.log(this.state.report);
      this.state.report=geojson;
      console.log(this.state.report);

      var downloadLink = document.getElementById('download-link');
      downloadLink.href = "data:;base64," + btoa(JSON.stringify(geoJson,null,4));
    }

    render() {
      return (


        <div className="AdminList w3-container">

        {this.state.Features.name}
        <div> <center>
        <br/>
        <div className="header">
        <button className="back" onClick={()=>this.handleBack()}><i className="abc fa fa-backward"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1><b>LIST OF ENTRIES</b></h1>

        </div>


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
          <strong><a className="aname" onClick={() => this.handleView(item.fid,item.sid)}>Name: {item.name}</a></strong>
          <button  className="b9 w3-btn w3-round-large w3-large  button1"
          onClick={()=>this.handleUpdate(item.fid,item.sid,item.name,item.latitude,item.longitude,item.country,item.state,
            item.district,item.landmark,item.image,item.others)}><i className="fa fa-refresh "></i></button>&nbsp;&nbsp;


            <button  className="b9 w3-btn w3-round-large w3-large button2" onClick={()=>this.handleDelete(item.fid)}><i className="fa fa-close"></i></button>&nbsp;&nbsp;&nbsp;
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
        <button  className="b10 w3-btn w3-round-large w3-large" onClick={()=>this.mapview()}>MAP VIEW</button>&nbsp;&nbsp;
      <button  className="b10 w3-btn w3-round-large w3-large" onClick={()=>this.exportGeoJson()}><a className="l" id="download-link" href='' target="_blank" download="geojson.json">DOWNLOAD</a><i className="fa fa-download"></i></button>&nbsp;&nbsp;&nbsp;<br/><br/>


                     <div  className="container2" >
        <div id="map1" className="map1" ref="map"> </div>

        </div>



        <br/><br/><br/>


        </center>

        </div>



      );


    }
  }

  export default AdminList;
