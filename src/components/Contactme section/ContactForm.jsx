import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kp5cy85", "template_bkftt8g", form.current, {
        publicKey: "U2J-UQEfdyLN9X8_K",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan text-lg">{success}</p>
      <form
        className="flex flex-col gap-4 mt-6"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          className="h-12 rounded-lg bg-lightBrown px-2 text-white placeholder-white focus:outline-cyan"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          className="h-12 rounded-lg bg-lightBrown px-2 text-white placeholder-white focus:outline-cyan"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={9}
          cols={48}
          className="rounded-lg bg-lightBrown px-2 py-2 text-white placeholder-white focus:outline-cyan"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="h-12 px-2 border border-cyan text-white font-bold text-xl bg-cyan hover:bg-darkCyan transition-all duration-500 rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
