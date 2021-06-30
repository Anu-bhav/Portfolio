import React, { useState /*, useEffect */ } from "react";
// import axios from "axios";
import Pdf from "../../editable-stuff/resume.pdf";
import Cover from "../../editable-stuff/cover.pdf";
import {
  aboutHeading,
  aboutDescription,
  aboutDescription2,
  showInstaProfilePic,
  // instaLink,
  // instaUsername,
  // instaQuerry,
} from "../../editable-stuff/configurations.json";

const AboutMe = () => {
  // const [instaProfilePic, setInstaProfilePic] = useState("");
  // const [showInsta, setShowInsta] = useState(showInstaProfilePic);
  const [showInsta] = useState(showInstaProfilePic);
  const [resumeURL] = useState(Pdf);
  const [CoverURL] = useState(Cover);

  // useEffect(() => {
  //   if (showInsta) {
  //     handleRequest();
  //   }
  // }, [showInsta]);

  // const handleRequest = (e) => {
  //   axios
  //     .get(instaLink + instaUsername + instaQuerry)
  //     .then((response) => {
  //       // handle success
  //       // console.log(response.data.graphql);
  //       return setInstaProfilePic(
  //         response.data.graphql.user.profile_pic_url_hd
  //       );
  //     })
  //     .catch((error) => {
  //       // handle error
  //       setShowInsta(false);
  //       return console.error(error.message);
  //     })
  //     .finally(() => {
  //       // always executed
  //     });
  // };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid bg-transparent m-0">
      <div className="container container-fluid p-5">
        <div className={`col-lg-12`}>
          <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1>
        </div>
        <div className="row">
          {showInsta && (
            <div className="col-5 d-none mx-auto d-block align-self-center">
              <img
                className="border border-secondary rounded-circle mb-4"
                src={require("../../editable-stuff/images/me.png")}
                alt="profilepicture"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
          <div className={`col-lg-${showInsta ? "7" : "12"}`}>
            {/* <h1 className="display-4 mb-5 text-center">{aboutHeading}</h1> */}
            <p className="lead text-center">{aboutDescription} <br />{aboutDescription2}</p>
            {resumeURL && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg mr-3"
                  href={Pdf}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={Cover}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="CoverLetter"
                >
                  Cover Letter
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};

export default AboutMe;
