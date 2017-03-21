
import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './agency.css';
import './agency.min.css';
import './App.css';

import Signup from './Signup.js';
import Survey from './Survey.js';
import Login from  './Login.js';
var Carousel = require('react-responsive-carousel').Carousel;





class App extends Component {
  constructor() {
    super();

    this.HandleSignin=this.HandleSignin.bind(this);
    this.Handlelogin=this.Handlelogin.bind(this);
  }


  Handlelogin(){
    if(document.getElementById("mn").innerHTML=="LOGOUT")
    document.getElementById("mn").innerHTML="LOGIN";

    var c=document.getElementById("content");
    ReactDOM.render(<Login />,c);

  }


  HandleSignin(){
    var c=document.getElementById("content");
    ReactDOM.render(<Signup />,c);

  }

  render() {

    return (
      <div id="App" className="App">
      <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
      <div className="container">
      <div className="navbar-header page-scroll">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
      <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
      </button>

      <a className="mapsurvey page-scroll" id="mapsurvey" href="#"><img id="lg" src="/img/logo.png" alt=""/>&nbsp;Survey Gate</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
      <li className="hidden">
      <a href="#page-top"></a>
      </li>
      <li>
      <a className="page-scroll"  id="link" href="#services">Services</a>
      </li>
      <li>
      <a className="page-scroll" id="link" href="#about">About</a>
      </li>
      <li>
      <a className="page-scroll"  id="link" href="#contact">Contact</a>
      </li>
      <li>
      <a className="page-scroll" id="link" href="#link" onClick = {()=>this.HandleSignin()}>SignUp</a>
      </li>
      <li>
      <a className="page-scroll " id="link" href="#link" onClick = {()=>this.Handlelogin()}><div id="mn">LOGIN</div></a>
      </li>
      </ul>
      </div>
      </div>
      </nav>


      <section id="content">
      <header>

      <Carousel  showThumbs={false} showArrows={false} showStatus={false} autoPlay = {true} infiniteLoop = {true} >


          <div>
              <img src="img/header-bg.jpg" />
              <div className="w3-display-middle w3-large w3-container w3-padding-16 ">
             <div className="intro-text">
                  <div className="intro-heading"> Create Survey!!!<br/> Get Answers...</div>
                    <a href="#services" className="page-scroll btn btn-xl">More>>></a>
              </div>

            </div>
            </div>

      <div>
          <img src="img/about/2.jpg" />

      </div>
      <div>
          <img src="img/about/1.jpg" />

      </div>
             <div>
                 <img src="img/road.jpeg" />

             </div>

             <div>
                 <img src="img/malls.jpeg" />

             </div>


         </Carousel>

      </header>
      </section>

      <section id="services">
      <div className="container">
      <div className="row">

      <div className="col-lg-12 text-center">
      <h2 className="section-heading">Services</h2>
      <h3 className="section-subheading text-muted">Introducing Survey Gate.</h3>
      </div>
      </div>
      <div className="row text-center">

      <div className="col-md-4">
      <span className="fa-stack fa-4x">
      <i className="fa fa-circle fa-stack-2x text-primary"></i>
      <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">Responsive Design</h4>
      <p className="text-muted">Our surveys work on mobile devices, tablets and desktop computers. Before you share your survey, just head into Preview mode to see how it looks on different devices.</p>
      </div>

      <div className="col-md-4">
      <span className="fa-stack fa-4x">
      <i className="fa fa-circle fa-stack-2x text-primary"></i>
      <i className="fa fa-upload fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">Upload Images</h4>
      <p className="text-muted">A picture really can be worth a thousand words.users can add images directly to their Surveys.</p>
      </div>

      <div className="col-md-4">
      <span className="fa-stack fa-4x">
      <i className="fa fa-circle fa-stack-2x text-primary"></i>
      <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
      </span>
      <h4 className="service-heading">Fast & Easy</h4>
      <p className="text-muted">We have done our best to make creating surveys as enjoyable as possible.Survey Gate is very fast and easily accessible</p>
      </div>
      </div>
      </div>
      </section>

      <section id="about">
      <div className="container">
      <div className="row">
      <div className="col-lg-12 text-center">
      <h2 className="section-heading">About Us</h2>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-12">
      <ul className="timeline">
      <li>
      <div className="timeline-image">
      <img className="img-circle img-responsive" id="abtimg" src="img/about/5.png" alt="image not available"/>
      </div>
      <div className="timeline-panel">
      <div className="timeline-heading">
      <h4></h4>
      </div>
      <div className="timeline-body">
      <p className="text-muted">Survey Gate is basically used to peform surveys online.It allows the users to add entries to the survey</p>
      </div>
      </div>
      </li>
      <li className="timeline-inverted">
      <div className="timeline-image">
      <img className="img-circle img-responsive" id="abtimg" src="img/about/8.jpg" alt=""/>
      </div>
      <div className="timeline-panel">

      <div className="timeline-body">
      <p className="text-muted">Survey Gate allows user to specify the location.</p>
      </div>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </section>





      <section id="contact">
      <div className="container">
      <div className="row">
      <div className="col-lg-12 text-center">
      <h2 className="section-heading">Contact Us</h2>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-12">
      <form name="sentMessage" id="contactForm" novalidate method="POST" action="http://formspree.io/priyankadvkr12@gmail.com">
      <div className="row">
      <div className="col-md-6">
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Your Name *" id="name" name="name" required data-validation-required-message="Please enter your name."/>
      <p className="help-block text-danger"></p>
      </div>
      <div className="form-group">
      <input type="email" className="form-control" placeholder="Your Email *" id="email" name="email" required data-validation-required-message="Please enter your email address."/>
      <p className="help-block text-danger"></p>
      </div>
      <div className="form-group">
      <input type="tel" className="form-control" placeholder="Your Phone *" id="phone" name="phone" required data-validation-required-message="Please enter your phone number."/>
      <p className="help-block text-danger"></p>
      </div>
      </div>
      <div className="col-md-6">
      <div className="form-group">
      <textarea className="form-control" placeholder="Your Message *" id="message" name="message" required data-validation-required-message="Please enter a message."></textarea>
      <p className="help-block text-danger"></p>
      </div>
      </div>
      <div className="clearfix"></div>
      <div className="col-lg-12 text-center">
      <div id="success"></div>
      <button type="submit" id="l" className="btn btn-xl">Send Message</button>
      </div>
      </div>
      </form>
      </div>
      </div>
      </div>
      </section>

      <footer>
      <div className="container">
      <div className="row">
      <div className="col-md-4">
      <span className="copyright">Copyright &copy; Survey Gate 2017</span>
      </div>
      <div className="col-md-4">
      <ul className="list-inline social-buttons">
      <li><a href="https://twitter.com/login" target="_blank"><i className="fa fa-twitter"></i></a>
      </li>
      <li><a href="https://www.facebook.com/login/" target="_blank"><i className="fa fa-facebook"></i></a>
      </li>
      <li><a href="https://www.linkedin.com/uas/login" target="_ blank"><i className="fa fa-linkedin"></i></a>
      </li>
      </ul>
      </div>
      <div className="col-md-4">
      <ul className="list-inline quicklinks">
      <li><a href="#">Privacy Policy</a>
      </li>
      <li><a href="#">Terms of Use</a>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </footer>

      </div>
    );
  }
}

export default App;
