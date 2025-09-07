import React from "react";
import { motion } from "framer-motion";
import { GiButterfly, GiFlowerPot, GiCat } from "react-icons/gi";

export default function AnimatedPetal({ x = "50%", delay = 0, type = "butterfly", size = "2xl" }) {
  const Icon = type === "butterfly" ? GiButterfly : type === "flower" ? GiFlowerPot : GiCat;
  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0, rotate: 0, scale: 0.8 }}
      animate={{ y: ["110vh", "-10vh"], opacity: [0, 0.9, 0], rotate: [0, 10, -10, 0], scale: [0.8, 1.1, 0.9] }}
      transition={{ duration: 14 + Math.random() * 8, repeat: Infinity, delay }}
      style={{ left: x }}
      className={`pointer-events-none absolute text-${size} md:text-4xl text-pink-400/90`}
    >
      <Icon />
    </motion.div>
  );
}