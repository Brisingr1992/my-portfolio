import React, { useState } from "react";
// import axios from "axios";
import {
  contactIcons,
} from "../../editable-stuff/configurations.json";

const ContactForm = () => {
//   const handleRequest = (e) => {
//     axios
//       .get(instaLink + instaUsername + instaQuerry)
//       .then((response) => {
//         // handle success
//         // console.log(response.data.graphql);
//         // return setInstaProfilePic(
//         //   response.data.graphql.user.profile_pic_url_hd
//         // );
//       })
//       .catch((error) => {
//         // handle error
//         setShowInsta(false);
//         return console.error(error.message);
//       })
//       .finally(() => {
//         // always executed
//       });
//   };
  const [hoverstatus, setHoverstatus] = useState(
    new Array(contactIcons.length).fill("contacticons")
  );

  const toggleHover = (data) => {
    const newhoverStatus = [...hoverstatus];
    console.log(data);
    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "contacticonshover";
      return setHoverstatus(newhoverStatus);
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "contacticons";
      return setHoverstatus(newhoverStatus);
    }
  };

  return (
    <section >
        <h2 className="display-4 lg-5 text-center">Contact Me</h2>
        <p className="lead mt-4 text-center">Please do not hesitate to contact me directly. I will usually get back to you asap!!</p>
        <div className="row mt-4">
            <div className="col-lg-9 mb-0">
                <form id="contact-form">
                    <div className="form-row">
                        <div className="form-group col-lg-6">
                            <input type="text" id="name" name="name" className="form-control" placeholder="Your name"/>
                        </div>
                        <div className="form-group col-lg-6">
                            <input type="text" id="email" name="email" className="form-control" placeholder="Your Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control" placeholder="Your Message" />
                    </div>
                    {/* <button type="submit" className="btn btn-primary btn-lg mx-auto d-block">Submit</button> */}
                    <p className="lead text-center">
                      <a
                        href={process.env.PUBLIC_URL}
                        className="btn btn-outline-secondary btn-lg"
                        rel="noreferrer noopener"
                        role="button"
                      >
                        Send Message
                      </a>
                    </p>
                </form>
            </div>
            <div className="col-lg-3 text-center">
                <ul className="list-unstyled mb-0">
                  {contactIcons.map((icon, index) => (
                    <li key={icon.id} className="list-unstyled mb-0">
                      <a
                        href={process.env.PUBLIC_URL}
                        data-toggle="tooltip" 
                        data-placement="top"
                        title={icon.text}
                        rel="noopener noreferrer"
                        aria-label={`My ${icon.image.split("-")[1]}`}
                      >
                        <i
                          className={`fas ${icon.image} fa-2x ${index !== 0 ? 'mt-4' : ''} ${hoverstatus[icon.id]}`}
                          onMouseOver={() => toggleHover({ icon, event: "enter" })}
                          onMouseOut={() => toggleHover({ icon, event: "leave" })}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    </section>
  );
};

export default ContactForm;
