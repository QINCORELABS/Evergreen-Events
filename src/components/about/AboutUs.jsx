import React from "react";
import "../about/AboutUs.css";
import aboutusweddingimg from "../../assets/about/about-us-img.webp";
import aboutussecond from "/about/about-new.jpg"
import evergreenlogo from "../../../public/logos/evergreen-logo.webp";
import registrationcertificate from "../../assets/about/registration-certificate.webp";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* First Section */}
      <div className="about-us-first-section">
        <div className="about-us-first-contents">
          <h2 className="italiana-regular">
            WELCOME TO EVERGREEN <br />
            EVENT MANAGEMENT
          </h2>
          <p>
            Evergreen Event Management is one of the leading Event Management
            Company in Kollam. The team has an exposure of more than a couple of
            years in the industry. Even though, Evergreen is a starter when
            compared to others, its height is beyond the reach of their
            competitors. The crew members along with the coordinator Mr. Shan
            Naji makes the team magnificent. Better Service along with good
            customer relationship makes Evergreen Event Management Company more
            and more lovely.
          </p>
        </div>
        <div className="about-us-first-rightside">
          <div className="image-container">
            <img src={aboutusweddingimg} alt="Wedding Event" />
            <div className="dotted-overlay"></div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="about-us-first-section reverse">
        <div className="about-us-first-contents about-us-second-contents">
          <p>
            Evergreen Event Management team, Kollam may take care of almost all
            the events all over Kerala. The capable team can handle events that
            are conducted from small scale to large scale within the industry
            standards. Among the competitors, Evergreen Event Management Kollam
            is known to be as the perfect wedding planners. They are having wide
            variety of Hindu Stage Decorations in Kollam, Christian Stage
            Decorations in Kollam, Muslim Stage Decorations in Kollam, Wedding
            Catering Services in kollam, Floor Decoration, Groom and Bridal
            Makeup, Wedding Cars with Decoration, DJ Parties, Fusion Musics,
            Oppana, Mehandi, Videography and Photography, Wedding Cakes, Variety
            of Wedding Cards, and so much of fun are in their pocket.
          </p>
        </div>
        <div className="about-us-first-rightside">
          <div className="image-container">
            <img
              src={aboutussecond}
              alt="Event Setup"
              className="secondaboutimg"
            />
            <div className="dotted-overlay"></div>
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div className="company-registration-certificate">
        <div className="company-logo">
          <img src={evergreenlogo} alt="Evergreen Logo" />
        </div>
        <div className="registration-certificate">
          <img
            src={registrationcertificate}
            alt="Registration Certificate"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
