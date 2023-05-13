import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import "../style/Contact.css";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_sf90p0c",
        "template_wyt0e0p",
        form.current,
        "_LJF21T8r0QuTN81U"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again later.");
        }
      );

    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <>
    <Navbar />
    <div className="contactPageWrapper">
      <div className="formWrapper">
        <h2 className="pageTitle">Contact Us</h2>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <div className="inputGroup">
            <input
              type="text"
              className="inputBox"
              name="Name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="inputBox"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className="inputBox"
              name="Phone"
              placeholder="Phone Number (optional)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
              className="inputBox messageBox"
              placeholder="Message"
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button name="Button" className="btn submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer>
        <h4 className="">
          Built With 💓 By &nbsp;
          <a href="https://github.com/prajwal-shindee">Prajwal Shinde</a>
        </h4>
      </footer>
    </div>
    </>
  );
};

export default Contact;
