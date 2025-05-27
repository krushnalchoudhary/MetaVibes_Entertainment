import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const features = [
  {
    title: "Immersive Campaigns",
    desc: "Next-level campaigns that captivate audiences using AR, VR, and AI storytelling.",
  },
  {
    title: "AI-Driven Insights",
    desc: "Harness big data and machine learning to predict customer behavior in real-time.",
  },
  {
    title: "Next-Gen Branding",
    desc: "Futuristic brand development through design, motion, and virtual identities.",
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Optional: Particle Background Layer */}
      <div className="particles" />

      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">About <span>MetaVibes</span></h2>
        <p className="about-subtext">
          We craft ultra-modern digital marketing experiences powered by innovation and insight.
        </p>

        <motion.div
          className="about-features"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {features.map((feat, idx) => (
            <motion.div
              className="feature-card"
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
