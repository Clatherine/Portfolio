import React, { useRef } from "react";
import { useState } from "react";

function ContactMe() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("form submitted");
    setSubmitted(true);
  };
  return (
    <section id="contact_section">
      <h2> CONTACT ME</h2>
      <p>
        Please get in touch if you have any questions, suggestions, or ideas you'd like to discuss.
      </p>

      <form
        id="contact_form"
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div id="inputs">
          <div id="name_email">
            <input
              type="hidden"
              name="access_key"
              value="ce6d5c55-531a-480c-8739-748db65b8e91"
            />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="contact-inputs"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="contact-inputs"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message"
            type="text"
            className="contact-inputs"
            id="message"
            required
          />
        </div>
        <div id="submit_button_div">
          <button type="submit">Submit</button>
          {submitted ? <p>Message submitted!</p> : null}
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
