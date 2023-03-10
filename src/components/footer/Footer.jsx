import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer__title">Dube</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>

          <li>
            <a href="#testimonial" className="footer__link">
              References
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-whatsapp"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin-square"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Linda Dube. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
