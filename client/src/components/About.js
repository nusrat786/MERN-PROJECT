import React, { useEffect, useState } from "react";
import profilepic from "../images/profilepic.png";
import profilepic2 from "../images/profilepic2.png";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container emp-profile">
      <form method="GET">
        <div className="row">
          <div className="col-md-4">
            <img
              src={userData.name === "alam" ? profilepic : profilepic2}
              alt="profile"
              width="150px"
            />
          </div>

          <div className="col-md-6">
            <div className="profile-head">
              <h5>{userData.name}</h5>
              <h6>{userData.work}</h6>
              <p className="profile-rating mt-3 mb-5">
                Rankings: <span>1/10</span>
              </p>

              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-selected="false"
                    aria-controls="profile"
                  >
                    TimeLine
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <input
              type="text"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>

        <div className="row">
          {/* left side url */}
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              <br />
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <br />
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>
              <br />
              <a
                href="https://www.gmail.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gmail
              </a>
              <br />
            </div>
          </div>
          {/* right side data toggle */}

          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User ID</label>
                  </div>

                  <div className="col-md-6">
                    <p>6784564736366</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>

                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>

                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>

                  <div className="col-md-6">
                    <p>{userData.phone}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Profession</label>
                  </div>

                  <div className="col-md-6">
                    <p>{userData.work}</p>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>hourly Rate</label>
                  </div>
                  <div className="col-md-6">
                    <p>10$/Hr</p>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <label>Total projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>230</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default About;
