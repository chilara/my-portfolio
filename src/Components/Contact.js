import React, { useState } from "react";
import Styles from "../Styles/Footer.module.css";

const Contact = () => {
  const initialValues = { surName: "", firstName: "", email: "" };
  const [formValue, setFormValue] = useState(initialValues);
  // const [formError, setFormError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormError(validate(formValue));
    // setIsSubmit(true);
  };

  // const validate = (values) => {
  //   const errors = {};
  //   if (values === "") {
  //     errors.surName = "Surname is required";
  //   } else if (values === "") {
  //     errors.firstName = "First Name is required";
  //   } else if (values === "") {
  //     errors.email = "Email is required";
  //   }
  //   return errors;
  // };

  // useEffect(() => {
  //   console.log(formError);
  //   if (Object.keys(formError) === 0) {
  //     console.log(formValue);
  //   }
  //   if (isSubmit) {
  //     console.log(formValue);
  //   }
  // }, [formError, formValue, isSubmit]);

  return (
    <section id="Contact" className={Styles.ContactContainer}>
      <div className={Styles.ParentContact}>
        <div className={Styles.ChildContact}>
          <div className={Styles.line} />
          <h3>Get In Touch</h3>
          <div className={Styles.line} />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="SURNAME"
              style={{ outline: "none" }}
              name="surName"
              value={formValue.surName}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="FIRST NAME"
              style={{ outline: "none" }}
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            placeholder="EMAIL"
            style={{ outline: "none" }}
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />

          <textarea
            placeholder="MESSAGE"
            style={{ outline: "none" }}
          ></textarea>
        </form>
        <a
          href="mailto:oguinechisomtimothycareer@gmail.com"
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
