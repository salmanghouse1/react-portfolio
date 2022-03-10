import React from "react";

function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <form>
        <label>
          username
          <input type="text" />
        </label>
        <label>
          email
          <input type="email" />
        </label>

        <label>
          Message:<input type="textarea"></input>
        </label>
        <button>Send</button>
      </form>
    </section>
  );
}

export default Contact;
