import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Augmented Reality Ads",
    description: "Immersive brand experiences using cutting-edge AR technology.",
    icon: "🧠",
  },
  {
    title: "AI Content Creation",
    description: "Leverage AI to generate high-converting, engaging content.",
    icon: "🤖",
  },
  {
    title: "Neuro-Marketing",
    description: "Target emotions and behavior using neuroscience-powered campaigns.",
    icon: "🧬",
  },
  {
    title: "360° Brand Strategy",
    description: "End-to-end digital transformation and branding solutions.",
    icon: "🚀",
  },
];

// Variants for stagger animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our <span>Services</span>
      </motion.h2>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
