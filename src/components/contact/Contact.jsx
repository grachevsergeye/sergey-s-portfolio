import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "../lang/i18n"

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      i18n.changeLanguage(navigator.language);
    }, []);

  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      <div className="cSection">
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 variants={listVariant} className="cTitle">
          {t("keep")}
          </motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>{t("name")}</label>
            <input type="text" name="user_username" placeholder="Jason Jay" />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="example@gmail.com"
            />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>{t("mess")}</label>
            <textarea
              rows={10}
              name="user_message"
              placeholder={t("write")}
            ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className="formButton">
          {t("s")}
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
        <motion.button
                className="homeButton"
              >
              <Link
              to="home"
              className="homeLink"
            >⬆{t("home")}⬆
              </Link>
        </motion.button>
      </div>
      <div className="cSection"><ContactSvg/></div>
    </div>
  );
};

export default Contact;