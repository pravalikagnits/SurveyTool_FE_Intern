import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



class Add extends React.Component {

  render() {
    return (
      <div id="wrapper">

          <div id="sidebar-wrapper">
            <div className="add">
              <div id="wrapper">
                <center>
                  <h1>MAP SURVEYING TOOL</h1><br/><br/>
                </center>
                <p>List of Surveys</p>
                      <ul class="sidebar-nav">
                          <li>
                            <a href="cdjm,zn">Survey of Hospitals</a>
                          </li>
                          <li>
                            <a href="mc,xn">Survey of Temples</a>
                          </li>
                          <li>
                            <a href="bndm,.">Survey of Sight seeing places</a>
                          </li>
                          <li>
                            <a href="nmz,cx">Survey of Restaurants</a>
                          </li>

                        </ul>
                    <button>Add new Survey</button>
              </div>
            </div>

          </div>

        </div>
      );
    }
  }

export default Add;
