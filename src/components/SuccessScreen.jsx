import React from 'react';
import { motion } from "framer-motion";
import { IoIosArrowBack } from 'react-icons/io';

const SuccessScreen = ({ onBack, logo }) => {
  return (
    <motion.div
      className="success-screen premium-success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="success-header">
        <button className="back-btn success-back-btn" onClick={onBack}>
          <IoIosArrowBack size={23} />
        </button>
        <motion.img
          src={logo}
          alt="Rolobee"
          className="success-logo"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </div>

      <div className="success-content">
        <motion.div
          className="success-badge"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        />

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          You're <span className="text-gradient">Winning!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Now start building something unstoppable...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SuccessScreen;
