import React from "react";
import "../about/AboutUs.css";

import aboutusfirst from "../../assets/about/about-us-img.webp";
// import aboutussecond from "../../assets/about/about-us=second.webp";
// import registrationcertificate from "../../assets/registration-certificate.webp"
const AboutUs = () => {
  return (
    <div className="about-us-container">

      <div className="about-us-contents">

        <div className="about-us-first-section">

          <div className="about-us-first-contents">
            <h2>
              WELCOME TO EVERGREEN <br />
              EVENT MANAGEMENT
            </h2>
            <p>
              Evergreen Event Management is one of the leading Event Management
              Company in Kollam. The team has an exposure of more than a couple
              of years in the industry. Even though, Evergreen is a starter when
              compared to others, its height is beyond the reach of their
              competitors. The crew members along with the coordinator Mr. Shan
              Naji makes the team magnificent. Better Service along with good
              customer relationship makes Evergreen Event Management Company
              more and more lovely.
            </p>
          </div>

          <div className="about-us-first-img">
            <img src={aboutusfirst} alt="" srcset="" />
          </div>


        </div>
      </div>
    </div>
  );
};

export default AboutUs;
