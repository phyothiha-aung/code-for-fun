import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParentComponent = ({
  children,
  animate,
  duration = 1,
  className = "",
  style = {},
  size = 300,
}) => {
  const parentRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const children = parent.children;
    const radius = parent.offsetWidth / 2 - children[0].offsetWidth / 2;
    const centerX = parent.offsetWidth / 2;
    const centerY = parent.offsetHeight / 2;
    const angleStep = (2 * Math.PI) / children.length;

    Array.from(children).forEach((child, index) => {
      const angle = index * angleStep;
      const x = centerX + radius * Math.cos(angle) - child.offsetWidth / 2;
      const y = centerY + radius * Math.sin(angle) - child.offsetHeight / 2;

      child.style.left = `${x}px`;
      child.style.top = `${y}px`;
    });
  }, [children]);

  return (
    <motion.div
      className={`relative rounded-full w-[300px] h-[300px] ${className}`}
      style={{
        ...style,
        width: size + "px",
        height: size + "px",
      }}
      ref={parentRef}
      initial={{ scale: 0 }}
      animate={animate}
      transition={{ duration, easings: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default ParentComponent;
