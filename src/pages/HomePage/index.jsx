import React from "react";
import "./style.css";
import { Question } from "../../components/Question";
import { Answer } from "../../components/Answer";
import { Loading } from "../../components/Loading";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const buttonsVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const variant = {
    hidden: { y: 8, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      ease: "easeInOut",
    },
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <header></header>
      <main>
        <Question text="Zdravím, jsem KOJORÁDCE. Váš průvodce kojením. S čím mohu pomoci?" />
        <motion.div
          className="buttonsContainer"
          variants={buttonsVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonsVariants}>
            <Answer
              link="/kojoradce/2"
              text="Potřebuji hned poradit"
              imgSrc="img/chat-kojoradce.svg"
              backgroundColor="#5B3F5D"
              className="variant"
              variants={variant}
            />
          </motion.div>
          <motion.div variants={buttonsVariants}>
            <Answer
              link="/info-o-kojeni"
              text="Hledám informace o kojení"
              imgSrc="img/info-kojeni.svg"
              backgroundColor="#442A65"
              className="variant"
              variants={variant}
            />
          </motion.div>
          <motion.div variants={buttonsVariants}>
            <Answer
              link="/laktacni-poradkyne"
              text="Hledám laktační poradkyni"
              imgSrc="img/laktacni-poradkyne.svg"
              backgroundColor="#3B0A3F"
              className="variant"
              variants={variant}
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};
