import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense, useEffect } from "react";
import { Link } from "react-scroll";
import "../lang/i18n"
import { useTranslation } from "react-i18next";
import GemContainer from "./gem/GemContainer";
import React from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {

  const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, []);

  const rolesText = t("roles").split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          <span dangerouslySetInnerHTML={{ __html: t("hey") }} /><br />
          <span>{t("full")}</span>
        </motion.h1>
        {/* LANGUAGE SWITCHER */}
        <motion.div className="language-switcher">
          <select
            className="lang-dropdown"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
            <option value="es">ESP</option>
          </select>
        </motion.div>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>{t("nice")}{t("fulls")}</motion.h2>
          <motion.p variants={awardVariants}>
          {t("tech")}
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/react.png" alt="" />
            <motion.img variants={awardVariants} src="/node.png" alt="" />
            <motion.img variants={awardVariants} src="/mongodb.png" alt="" />
            <motion.img variants={awardVariants} src="/figma.png" alt="" />
            <motion.img variants={awardVariants} src="/ex.png" alt="" />
            <motion.img variants={awardVariants} src="/tailwind.png" alt="" />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.div
      animate={{ y: [0, 0], opacity: [0, 1, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
      className="scroll"
    >
  <Link to="services" smooth={true} duration={300} offset={-50}>
  <motion.svg
  width="60px"
  height="60px"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  initial={{ rotateX: 0 }}
  animate={{ rotateX: [0, -10, 0] }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity
  }}
  style={{
    transformStyle: "preserve-3d",
    transformOrigin: "bottom center"
  }}
>
  {/* Laptop base */}
  <rect x="10" y="40" width="44" height="8" fill="#795dbb" rx="2" stroke="white"
    strokeWidth="1"/>
  
  {/* Laptop screen */}
  <motion.rect
    x="14"
    y="16"
    width="36"
    height="24"
    rx="2"
    fill="#795dbb"
    stroke="white"
    strokeWidth="1"
  />
</motion.svg>
  </Link>
</motion.div>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} 
            href="https://github.com/grachevsergeye"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/github.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} 
            href="https://t.me/grachevsergeye"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/tg.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} 
            href="https://www.instagram.com/grachevsergeyee"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} 
            href="https://www.youtube.com/@grachevsergeye"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            >
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} 
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            >
            <img src="/x.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">{t("cof")}</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* ANIMATION */}
        <motion.div className="certificate">
        {rolesText}
        <GemContainer />
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.div
          className="contactButton"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
        <Link
        to="contact" 
        smooth={true}
        duration={200}
        offset={-50}
        hashSpy={false}
        className="contactLink"
      >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="white" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">{t("hire")} •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                {t("con")} •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
            </Link>
          </motion.div>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
          <img src="/me2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
