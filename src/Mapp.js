import React from 'react';
import ReactDOM from 'react-dom';

var TextBox = React.createClass({
  render: function () {
    return <div> <input type="text" placeholder="feature name" enabled="true"/>:&nbsp;&nbsp;
    <input type="text" placeholder="description" enabled="true"/><br/><br/>
    </div>;
  }
});


var Container = React.createClass({
  getInitialState: function () {
    return { chatboxes: [] };
  },
  renderChatbox: function () {
    var cbs = this.state.chatboxes;
    cbs.push(<TextBox />);
    this.setState({chatboxes: cbs});
  },
  removeChatbox: function () {
    var cbs = this.state.chatboxes;
    cbs.pop(<TextBox />);
    this.setState({chatboxes: cbs});
  },

  render: function() {
    return <div>
    {this.state.chatboxes}
    <button className="btn btn-success" onClick={this.renderChatbox}>Add feature</button>&nbsp;
    <button className="btn btn-success" onClick={this.removeChatbox}>delete feature</button><br/>

    </div>;
  }
});

class Mapp extends React.Component {

  constructor(props)
  {
    super(props);
    this.getmap=this.getmap.bind(this);

  }
  getmap(){
    var map = new google.maps.Map(document.getElementById('ab'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });
  }

  render(){

    return(
      <div className=" Mapp w3-row w3-black w3-text-white w3-border">
      <br/><br/>
      <label  id="uname">Welcome {this.props.uname}</label><br/>

      <div className="desc">Survey name<br/>
      some description<br/></div><br/><br/>
      Name:  <input  type="text"placeholder="Name"/><br/><br/>
      Address:  <input type="text"placeholder="Address"/><br/><br/>
      Landmark:  <input type="text"placeholder="landmark"/><br/><br/>

      <center>  <Application/></center>

      Latitude:  <input type="text"placeholder="latitude"/><br/><br/>
      Longitude:  <input type="text"placeholder="longitude"/><br/><br/>
      <Container name="World" /><br/>

      <button className="w3-btn w3-large w3-round btn-success" >Submit</button><br/><br/>
      <button onClick={this.getmap}>getmap</button>
      <div id="ab"></div>

      </div>
    );
  }
}

export default Mapp;
