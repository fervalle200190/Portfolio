import React, { useState } from "react";
import axios from "axios";

const initialForm = {
  email: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://formsubmit.co/ajax/fervalle200190@gmail.com",
      method: "POST",
      data: {
        email: form.email,
        message: form.message,
      },
      dataType: "json",
    });
    setForm(initialForm);
  };
  return (
    <div className="contact-container" id="contact">
      <h6>Contact</h6>
      <p className="contact-detail">
        If you want to get in touch with me you can either email me at
        fervalle200190@gmail.com or fill out this form:
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleForm}
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          value={form.message}
          onChange={handleForm}
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
