import React, { useEffect, useState } from "react";
import phone from "../images/phone.jpg";
import address from "../images/address.jpg";
import mail from "../images/mail.jpg";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
    // eslint-disable-next-line
  }, []);
  // we are storing data in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  //send data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log("message not send");
    } else {
      alert("message send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <div className="contact-info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            {/* phone number */}
            <div className=" col-lg-3 contact-info-item d-flex justify-content-start align-items-center">
              <img src={phone} alt="phone" />
              {/* <i className="fas fa-mobile-alt phone"></i> */}
              <div className="contact-info-content">
                <div className="contact-info-title">Phone</div>
                <div className="contact-info-text">+91 234567555</div>
              </div>
            </div>

            {/* email number */}
            <div className=" col-lg-3 contact-info-item d-flex justify-content-start align-items-center">
              <img src={mail} alt="mail" />
              {/* <i className="fas fa-mobile-alt phone"></i> */}
              <div className="contact-info-content">
                <div className="contact-info-title">Email</div>
                <div className="contact-info-text">abc@gmail.com</div>
              </div>
            </div>

            {/* Address */}
            <div className=" col-lg-3 contact-info-item d-flex justify-content-start align-items-center">
              <img src={address} alt="address" />
              {/* <i className="fas fa-mobile-alt phone"></i> */}
              <div className="contact-info-content">
                <div className="contact-info-title">Address</div>
                <div className="contact-info-text">Navi Mumbai</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us form */}
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-form-container">
                <div className="contact-form-title">Get in Touch</div>
                <form method="POST" id="contact-form">
                  <div className="contact-form-name d-flex justify-content-between align-items between">
                    <input
                      type="text"
                      id="contact-form-name"
                      className="contact-form-name"
                      name="name"
                      value={userData.name}
                      onChange={handleInputs}
                      placeholder="Your name"
                      required="true"
                    />

                    <input
                      type="email"
                      id="contact-form-email"
                      className="contact-form-email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Your email"
                      required="true"
                    />

                    <input
                      type="number"
                      id="contact-form-phone"
                      className="contact-form-phone"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputs}
                      placeholder="Your mobile number"
                      required="true"
                    />
                  </div>

                  <div className="contact-form-text mt-4">
                    <textarea
                      className="text-field contact-form-message"
                      name="message"
                      value={userData.message}
                      onChange={handleInputs}
                      placeholder="Message..."
                      cols="81"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="contact-form-button">
                    <button
                      type="submit"
                      className="button contact-submit-button btn-primary"
                      onClick={contactForm}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
