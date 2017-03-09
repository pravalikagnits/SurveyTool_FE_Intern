import React from 'react';
import ReactDOM from 'react-dom';
import './contact.css';
import AdminList from './AdminList.js';

class contact extends React.Component {
  constructor(props) {
                        super(props);
                  // this.state = {
                  //   report:'',
                  // };
     }




  render(){

    return(
      <div className="contactuspage w3-container " >
    console.log("hi");
      {this.props.report}
      </div>
    );
  }
}

export default contact;
