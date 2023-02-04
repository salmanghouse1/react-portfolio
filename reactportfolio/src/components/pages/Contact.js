import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_API_KEY_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
<<<<<<< HEAD
    <section className="flex">
      <h1 className="heading-block">Contact</h1>
      <ul>
        <li>
          <span>Name:</span>Salman Ghouse
        </li>
        <li>
          <span>Email:</span>salmanghouse1@gmail.com
        </li>
      </ul>
    </section>
=======
      <div>
    <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
>>>>>>> develop
  );
};

export default Contact;



