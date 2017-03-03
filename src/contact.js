import React from 'react';
import ReactDOM from 'react-dom';
import './contact.css';

class contact extends React.Component {



  render(){

    return(
      <div className="contactuspage w3-container " >
      <h1>Contact Us</h1>
      <form action="" method="post" role="form" className="contactForm">
      <div className="form-group">
      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="required"  minlen="8" data-msg="Please enter at least 4 chars" />
      <div className="validation"></div>
      </div>

      <div className="form-group">
      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="required" data-rule="email" data-msg="Please enter a valid email" />
      <div className="validation"></div>
      </div>

      <div className="form-group">
      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
      <div className="validation"></div>
      </div>

      <div className="form-group">
      <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
      <div className="validation"></div>
      </div>

      <div className="text-center"><button type="submit" className="w3-btn w3-round-large">Send Message</button></div><br/>
      </form>

      </div>
    );
  }
}

export default contact;
