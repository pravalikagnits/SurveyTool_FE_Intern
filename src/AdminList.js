import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './AdminList.css';
import Index5 from './Index5.js';
import Index6 from './Index6.js';
import UsrNewEntry from './UsrNewEntry.js';
import AdminFeatureList from './AdminFeatureList.js';
import UpdateFeatureList from './UpdateFeatureList.js';
import jsonreport from './jsonreport.js';

class AdminList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Features:[],
      details:[],
      id:'',
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


  handleView(id){
    console.log(id);
    this.state.id=id;
    var c=document.getElementById("content");
    ReactDOM.render(<AdminFeatureList fid={this.state.id}/>,c);

  }


  handleDelete(id){

    var r = confirm("Move to Trash!");
    if (r == true) {

      console.log(id);
      fetch('http://localhost:9000/Features/'+ id, {

        headers: {
          "Content-Type": "application/json",
          "Accept":"application/json"
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
    ReactDOM.render(<UpdateFeatureList fid={this.state.fid} name={this.state.name} latitude={this.state.lat} longitude={this.state.long} country={this.state.country} state={this.state.state} district={this.state.district} festivals={this.state.festivals}  deities={this.state.deities} archstyle={this.state.archstyle}
      datebuilt={this.state.datebuilt} creator={this.state.creator} image={this.state.image} guides={this.state.guides} eateries={this.state.eateries}  />,c);

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
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      var map = new google.maps.Map(document.getElementById("map1"), mapOptions);

      var i=0;
      var json=new Array();
      console.log(this.state.Features);

      for(i=0;i<this.state.Features.length;i++)
      {
        json[i]={lat:this.state.Features[i].latitude,long:this.state.Features[i].longitude,name:this.state.Features[i].name,image:this.state.Features[i].image}

      }


      for (var i = 0, length = json.length; i < length; i++) {
        var data = json[i],
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
        json[i]={lat:this.state.Features[i].latitude,long:this.state.Features[i].longitude,name:this.state.Features[i].name}
        polylineFeature.geometry.coordinates.push(
          json[i].long,json[i].lat
        );
        polylineFeature.properties={"name:":json[i].name};
        geoJson.features.push(polylineFeature);
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
        <button className="back" onClick={()=>this.handleBack()}><i className="fa fa-backward"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1><b>LIST OF ENTRIES</b></h1>

        </div>


        {this.state.Features.length ?
          this.state.Features.map((item,i)=>

          <div className="card">

          <div key={i} className="container1" >

          <h3><strong><a onClick={() => this.handleView(item.fid)}>Name: {item.name}</a></strong><button  className="w3-btn w3-round-large w3-large  button1" onClick={()=>this.handleUpdate(item.fid,item.name,item.latitude,item.longitude,item.country,item.state,
            item.district,item.deities,item.festivals,item.archstyle,item.datebuilt,item.creator,item.image,
            item.guides,item.eateries)}><i className="fa fa-refresh "></i></button>&nbsp;&nbsp;
            <button  className="w3-btn w3-round-large w3-large button2" onClick={()=>this.handleDelete(item.fid)}><i className="fa fa-close"></i></button>&nbsp;&nbsp;&nbsp;
            </h3>
            <hr/>

            <div className="row">
            <div className="col-sm-4" ><strong>Country:</strong></div>
            <div className="col-sm-8"><strong> {item.country}</strong></div><br/>
            </div>

            <div className="row">
            <div className="col-sm-4" ><strong>State:</strong></div>
            <div className="col-sm-8"> <strong>{item.state}</strong></div><br/>
            </div>

            <div className="row">
            <div className="col-sm-4" ><strong>District:</strong></div>
            <div className="col-sm-8"><strong> {item.district}</strong></div><br/>
            </div>



            </div>

            </div>


          )
          : <p> loading..</p>
        }

        <br/>
        </center></div>
        <center>
        <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.mapview()}>MAP VIEW</button>&nbsp;&nbsp;
        <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.exportGeoJson()}><a id="download-link" href='' target="_blank" download="geojson.json">Download</a><i className="fa fa-download"></i></button>&nbsp;&nbsp;&nbsp;<br/><br/>


                     <div  className="container1" >
        <div id="map1" className="map1" ref="map"> </div>

        </div>



        <br/><br/><br/>


        </center>

        </div>



      );


    }
  }

  export default AdminList;
