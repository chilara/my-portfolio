import React, { useState } from "react";
import Styles from "../Styles/Footer.module.css";

const Contact = () => {
  const initialValues = { surName: "", firstName: "", email: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validation(formValue));
  };

  const validation = (value) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.surName) {
      error.surName = "Please enter your Surname";
    }
    if (!value.firstName) {
      error.firstName = "Please enter your First name";
    }
    if (!value.email) {
      error.email = "Please enter your email address";
    } else if (!regex.test(value.email)) {
      error.email = "Please enter a valid email address";
    }
    return error;
  };

  return (
    <section id="Contact" className={Styles.ContactContainer}>
      <div className={Styles.ParentContact}>
        <div className={Styles.ChildContact}>
          <div className={Styles.line} />
          <h3>Get In Touch</h3>
          <div className={Styles.line} />
        </div>
        <form>
          <div>
            <main>
              <input
                type="text"
                placeholder="SURNAME"
                style={{ outline: "none" }}
                name="surName"
                value={formValue.surName}
                onChange={handleChange}
              />
              <span style={{ color: "#f7b633", fontSize: "16px" }}>
                {formError.surName}
              </span>
            </main>
            <main>
              <input
                type="text"
                placeholder="FIRST NAME"
                style={{ outline: "none" }}
                name="firstName"
                value={formValue.firstName}
                onChange={handleChange}
              />
              <span style={{ color: "#f7b633", fontSize: "16px" }}>
                {formError.firstName}
              </span>
            </main>
          </div>
          <main
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <input
              type="email"
              placeholder="EMAIL"
              style={{ outline: "none" }}
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            <span style={{ color: "#f7b633", fontSize: "16px" }}>
              {formError.email}
            </span>
          </main>
          <textarea
            placeholder="MESSAGE"
            style={{ outline: "none" }}
          ></textarea>
        </form>
        <a
          href="mailto:oguinechisomtimothycareer@gmail.com"
          onClick={handleSubmit}
          target="_blank"
          rel="noreferrer"
        >
          <button>SEND</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
