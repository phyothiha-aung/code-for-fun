import React from "react";
import { motion } from "framer-motion";

const ChildComponent = ({
  number,
  animate,
  duration = 1,
  style,
  className = "",
}) => {
  return (
    <motion.div
      animate={animate}
      transition={{ duration, easings: "easeIn" }}
      className={`absolute rounded-full w-[50px] h-[50px] bg-green-300 flex justify-center items-center ${className}`}
      style={style}
    >
      {number}
    </motion.div>
  );
};

export default ChildComponent;
