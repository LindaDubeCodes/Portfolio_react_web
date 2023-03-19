import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I can do for you</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">

              Web Development
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More<i class="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active_modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                Benefits of my  Websites to Your Business
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Modern</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Responsive</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Secure</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Performance and Speed</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">
              Data Analysis
              <br /> & Visualization
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More<i class="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active_modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Data Analysis</h3>
              <p className="services__modal-description">
                Benefits of my  Analysis to Your Business
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Better decision-making</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Personalize the customer experience
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Track customer behavioral changes
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Identification of potential risks
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Increase the efficiency of work
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-palette services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Design
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More<i class="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active_modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">UI/UX Design</h3>
              <p className="services__modal-description">
                Benefits of my Great UI/UX Designs to Your Business
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Boosts Brand Identity and Loyalty</p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Increases Traffic as more and more users will be interested in what you have to offer </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    saves your users’ time by making navigating your site or app easy and fast
                  </p>
                </li>

                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">ensure that every page on your website and app has a consistent design</p>
                </li>


              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
