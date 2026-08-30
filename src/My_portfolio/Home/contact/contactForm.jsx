import {
  ArrowForward,
  ContactMail,
  Email,
  InputOutlined,
  Message,
} from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm("service_8o946t4", "template_4k4s56j", form.current, {
        publicKey: "d_IxtIu-RIvhl46AV",
      })
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className=" bg-transparent pl-2 py-3 sm:px-3 sm:py-6">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-2 sm:mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-5">
          Have a project or opportunity? Send me a message.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-900 sm:p-8 p-3 rounded-2xl shadow-lg"
        >
          {/* Name */}
          <div className="mb-5">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Your Name
            </label>

            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Email */}
          <div className="mb-2 sm:mb-5">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Email Address
            </label>

            <input
              type="email"
              name="from_email"
              placeholder="example@gmail.com"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Subject */}
          <div className="mb-2 sm:mb-5">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              placeholder="Project inquiry"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          {/* Message */}
          <div className="mb-3 sm:mb-6">
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full sm-w-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>

          {/* Status */}
          {status && (
            <p className="text-center mt-3 text-gray-700 dark:text-gray-200">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
