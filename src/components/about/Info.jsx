import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-certification about__icon"></i>
        <h3 className="about__title">Certified Technician</h3>
        <span className="about__subtitle">Associate Degree in Information Technology</span>
      </div>

      <div className="about__box">
        <i class="bx bx-male-female about__icon"></i>
        <h3 className="about__title">Team Player</h3>
        <span className="about__subtitle">able to communicate effectively, collaborate on projects, and support my teammates</span>
      </div>

      <div className="about__box">
        <i class="bx bx-book-open about__icon"></i>
        <h3 className="about__title">Curious</h3>
        <span className="about__subtitle">Dedicated to continuously learning and exploring newer technologies</span>
      </div>
    </div>
  );
};

export default Info;
