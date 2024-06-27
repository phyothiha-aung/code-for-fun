"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";

const slideAnimation = {
  visible: {
    x: 0,

    transition: {
      type: "linear",
    },
  },
  invisible: {
    x: "100%",

    transition: {
      type: "linear",
    },
  },
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);
  return (
    <>
      <div className="hidden sm:block bg-red-200 h-[70px]">Hello</div>
      <nav className="h-[64px] bg-blue-300 flex items-center px-5 sm:px-10 sticky top-0 z-50 justify-between">
        <div className="">Navbar</div>
        <ul className="hidden sm:flex items-center gap-5">
          {["Home", "Products", "Contact", "About Us"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex items-center">
          <p>Phyo Thiha Aung</p>
          <HiOutlineMenuAlt2
            size={28}
            className="ml-5 text-gray-600 sm:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>
      </nav>
      <motion.div
        variants={slideAnimation}
        animate={showMenu ? "visible" : "invisible"}
        className="fixed inset-0 bg-cyan-500 max-h-screen min-h-screen z-10"
      ></motion.div>
    </>
  );
};

export default Navbar;
