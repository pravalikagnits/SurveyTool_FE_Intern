import React from 'react';
import ReactDOM from 'react-dom';

class Adminpage extends React.Component {



  render(){

    return(
      <div className="Adminpage w3-border w3-black">
      <div className="w3-container w3-border w3-black">
      <h2>Welcome Admin</h2>
      </div>

      <div className="w3-layout-container">
      <div className="w3-container w3-layout-cell  w3-quarter w3-khaki">
      <ul >

      <li>
      <button >List Of Surveys</button>
      </li>


      <li>
      <button >Create New Survey</button>
      </li>
      </ul>

      </div>
      <div id="main" className="w3-container w3-layout-cell w3-border w3-rest w3-khaki">
      hello
      </div>
      </div>
      </div>
    );
  }
}

export default Adminpage;
