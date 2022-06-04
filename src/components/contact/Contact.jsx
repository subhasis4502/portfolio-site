import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";

const Contact = () => {
  const form = useRef();
  const alert = useAlert();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v8blv69",
      "template_xjw166i",
      form.current,
      "Q3pIrEvqOLa9Hj3h6"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a
            href="mailto:subhasis4502@gmail.com"
            target="_blank"
            className="contact__option"
          >
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>subhasis4502@gmail.com</h5>
            <a href="mailto:subhasis4502@gmail.com" target="_blank">
              Send a message
            </a>
          </a>
          <a
            href="https://m.me/subhasis4502"
            className="contact__option"
            target="_blank"
          >
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>subhasis4502</h5>
            <a href="https://m.me/subhasis4502" target="_blank">
              Send a message
            </a>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919804425398"
            target="_blank"
            className="contact__option"
          >
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+9198******98</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919804425398"
              target="_blank"
            >
              Send a message
            </a>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Id"
            required
          />
          <textarea
            name="message"
            rows="13"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              alert.success("Your message sent Successfully!");
            }}
          >
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
