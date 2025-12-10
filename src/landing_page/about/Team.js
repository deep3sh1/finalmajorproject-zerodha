import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* LEFT SIDE */}
        <div className="col-md-6 p-3 d-flex justify-content-center">
          <div style={{ marginLeft: "40px", textAlign: "center" }}>
            <img
              src="media/images/myself.png.png"
              style={{
                borderRadius: "50%",
                width: "220px",
                height: "220px",
                objectFit: "cover",
                border: "3px solid #ddd",
              }}
              alt="Deepesh Wadhe"
            />

            <h4 className="mt-4 text-dark">Deepesh Wadhe</h4>
            <h6 className="text-secondary">Full Stack Developer</h6>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 p-3">
          <p>
            I am a passionate full stack developer currently working on building
            a real-world Zerodha-inspired trading platform as my major project.
          </p>

          <p>
            I mainly work with modern web technologies like React, Node.js,
            Express, and MongoDB, and I focus on improving my skills through
            hands-on project development.
          </p>

          <p>
            Apart from coding, I enjoy learning new technologies and constantly
            upgrading my development knowledge.
          </p>

          {/* ✅ SOCIAL ICONS NOW AFTER PARAGRAPH */}
          <div className="d-flex gap-4 mt-3">
            <a
              href="https://github.com/deep3sh1"
              target="_blank"
              rel="noreferrer"
              className="text-dark"
              style={{ fontSize: "1.8rem" }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://www.linkedin.com/in/deepesh-wadhe/"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
              style={{ fontSize: "1.8rem" }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
