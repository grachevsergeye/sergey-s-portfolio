import ComputerModelContainer from "./computer/ComputerModelContainer";
import PizzaModelContainer from "./pizza/PizzaModelContainer";
import Counter from "./Counter";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import "../lang/i18n"
import { useTranslation } from "react-i18next";
import MugcoffeeContainer from "./coffee/MugcoffeeContainer";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Services = () => {

    const { t, i18n } = useTranslation();
  
    useEffect(() => {
      i18n.changeLanguage(navigator.language);
    }, []);

    const services = [

      {
        id: 1,
        img: "/service1.png",
        title: `${t("web")}`,
        counter: 9,
      },
      {
        id: 2,
        img: "/service2.png",
        title: `${t("mod")}`,
        counter: 3,
      },
      {
        id: 3,
        img: "/service3.png",
        title: `${t("brand")}`,
        counter: 5,
      },
    ];

  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          {t("how")}
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={15} text={t("proj")} />
          <Counter from={0} to={15} text={t("happy")} />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugcoffeeContainer />
        ) : (
          <PizzaModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
