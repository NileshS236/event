import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__contents">
        <div className="footer__social">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <YouTubeIcon />
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
            <p>savla.rh@somaiya.edu</p>
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
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy;2020 Developed by SRG</p>
      </div>
    </div>
  );
};

export default Footer;
