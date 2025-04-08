import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import "../lang/i18n"
import { useTranslation } from "react-i18next";

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      i18n.changeLanguage(navigator.language);
    }, []);

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>{t("view")}</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes

  const items = [
    {
      id: 1,
      img: "/p1.png",
      title: "GeePrice scraping App ",
      desc: `${t("first")}`,
      link: "https://github.com/grachevsergeye/GeePriceApp",
    },
    {
      id: 2,
      img: "/p2.png",
      title: "Url Shortener System",
      desc: `${t("sec")}`,
      link: "https://github.com/grachevsergeye/ShortnrApp",
    },
    {
      id: 3,
      img: "/p3.png",
      title: "GET Recipe App",
      desc: `${t("third")}`,
      link: "https://github.com/grachevsergeye/GET-Recipe-App",
    },
    {
      id: 4,
      img: "/p4.png",
      title: "Twyford Rockets Project",
      desc: `${t("fourth")}`,
      link: "https://github.com/grachevsergeye/twyford-rockets-landing",
    },
    {
      id: 5,
      img: "/p5.png",
      title: "Real-time Chat Application",
      desc: `${t("fifth")}`,
      link: "https://github.com/grachevsergeye/SergoChatApp",
    },
  ];

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="80%" height="80%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#795dbb"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
