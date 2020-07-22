import React from "react";
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <div id="contactme" className="jumbotron jumbotron-fluid bg-light m-0">
      <div className="container container-fluid p-5">
        <div className="row">
          <div className="col-lg-12">
              <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
