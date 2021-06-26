import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Pdf from "../editable-stuff/resume.pdf";
import { showBlog, blogUrl } from "../editable-stuff/configurations.json";

const Navbar = (props) => {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const istop = window.scrollY < 300;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-light ${isTop ? "bg-transparent" : "navbar-white"
        } `}
    >
      <a className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"} style={isTop ? { color: "rgb(255 255 255 / 80%)" } : { color: "rgb(0 0 0 / 36%)" }}>
        {`<Anubhav/>`}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
              style={isTop ? { color: "rgb(255 255 255 / 80%)" } : { color: "rgb(0 0 0 / 36%)" }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#skills"}
              style={isTop ? { color: "rgb(255 255 255 / 80%)" } : { color: "rgb(0 0 0 / 36%)" }}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
              style={isTop ? { color: "rgb(255 255 255 / 80%)" } : { color: "rgb(0 0 0 / 36%)" }}
            >
              Projects
            </a>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link lead"
              href={Pdf}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b>Resume</b>
            </a>
          </li> */}
          {showBlog && (
            <li className="nav-item">
              <a
                className="nav-link lead" rel="noopener noreferrer"
                style={isTop ? { color: "rgb(255 255 255 / 80%)" } : { color: "rgb(0 0 0 / 36%)" }}
                // to={process.env.PUBLIC_URL + "/blog"}
                href={blogUrl}
              >
                Blog
              </a>
            </li>
          )}

        </ul>
      </div>
    </nav >
  );
};

export default Navbar;
