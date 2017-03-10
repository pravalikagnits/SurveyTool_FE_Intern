import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './UserMyEntry.css';
import Index6 from './Index6.js';
import UsrNewEntry from './UsrNewEntry.js';
import UserFeatureList from './UserFeatureList.js';
import UpdateFeatureList2 from './UpdateFeatureList2.js';

  var xyz;
class UserMyEntry extends Component {

            constructor(props) {
                                  super(props);
                            this.state = {

                                MyEntries:[],
                                id:'',
                            };
                              this.some=this.some.bind(this);
               }




     componentDidMount(){
       var auth = window.sessionStorage.getItem('token');
     var uname = window.sessionStorage.getItem('uname');
     var entry;
     var that=this;

     console.log(uname);
            fetch(`http://localhost:9000/users/`+ uname )
            .then(response => response.json().then((data)=>{
              that.setState({MyEntries:data});
              console.log("bi",that.state.MyEntries);
              xyz=that.state.MyEntries;

            })
          );





     }

     some()
     {
         console.log("hi",xyz);
         document.getElementById("ab").value=xyz.features[0].country;
        var entry=document.getElementById("xx");
        entry.innerHTML=xyz.features.length;



     }




  render() {
      return (


            <div className="UserMyEntry w3-container">


                      <button className="w3-btn w3-round-large w3-large" onClick={()=>this.some()}>My Entries</button>
                      <input type="text" id="ab"/>
                    <div id="xx"></div>

            </div>

           );


}
}


export default UserMyEntry;
