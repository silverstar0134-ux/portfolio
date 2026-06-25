import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import {
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_tez5wxn",
        "template_hveb9v9",
        form.current,
        "FtoZbxnCTiWcaqfoX"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);

        e.target.reset();

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      {/* LEFT */}
      <motion.div
        className="contact-left"
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <p className="contact-tag">
          CONTACT
        </p>

        <h2>
          Let's Build Something
          <span> Amazing</span>
        </h2>

        <p className="contact-desc">
          Have a project idea or
          freelance work? Feel free
          to contact me. I'm always
          open to discussing new
          opportunities.
        </p>

        <div className="contact-info">
          <div>
            <FiMail />
            <span>
              silverstar0134@gmail.com
            </span>
          </div>

          <div>
            <FiPhone />
            <span>
              +91 XXXXXXXXXX
            </span>
          </div>

          <div>
            <FiMapPin />
            <span>
              Thoothukudi,
              Tamil Nadu
            </span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT FORM */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Sending..."
            : "Send Message 🚀"}
        </button>

        {success && (
          <div className="success-message">
            ✅ Message Sent
            Successfully
          </div>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;