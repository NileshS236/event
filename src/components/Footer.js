import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contents">
        <div className="footer__social">
          <a href="https://www.facebook.com/TECHTRICKZ20/">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=plrx7j65ry4q&utm_content=jfetkst">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/techtrickz2?s=09">
            <TwitterIcon />
          </a>
          <a href="https://www.linkedin.com/in/tech-trickz-5397681b9">
            <LinkedInIcon />
          </a>
        </div>
        <div className="footer__info">
          <div className="footer__infoAddress">
            <h5>Address</h5>
            <p>Chinchpokli, Mumbai</p>
          </div>
          <div className="footer__infoPhone">
            <h5>Phone</h5>
            <p>8080851914</p>
          </div>
          <div className="footer__infoEmail">
            <h5>Email</h5>
            <p>techtrickz20@gmail.com</p>
          </div>
        </div>
        <div className="footer__quickLinks">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Events</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3>TechTrikz</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <Link to="/contacts">
            <button className="contact">Get in Touch</button>
          </Link>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy;2020 | Made With ❤ by SRG solutions IT Pvt. Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
