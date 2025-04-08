import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import "../lang/i18n"
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Speech = () => {

  const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(navigator.language);
	}, []);
  
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1500,
            `${t("w")}`,
            1500,
            `${t("g")}`,
            1500,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
