"use client";
import { useState } from "react";
import ChildComponent from "./ChildComponent";
import ParentComponent from "./ParentComponent";

const ROTATION = 360;
const DURATION = 2;

export default function RotateAnimation({
  containerStyle = {},
  containerClassName = "",
  containerSize = 300,
  itemStyle = {},
  itemClassName = "",
  duration = DURATION,
  rotation = ROTATION,
}) {
  //const [isActive, setIsActive] = useState(false);

  const children = Array.from({ length: 8 }, (_, i) => (
    <ChildComponent
      key={i}
      number={i + 1}
      animate={{ rotate: -rotation, scale: 1 }}
      duration={duration}
      className={itemClassName}
      style={itemStyle}
    />
  ));

  return (
    <div
      className={`relative flex justify-center items-center w-[300px] h-[300px] ${containerClassName}`}
      style={{
        ...containerStyle,
        width: containerSize + "px",
        height: containerSize + "px",
      }}
    >
      <ParentComponent
        animate={{
          rotate: rotation,
          scale: 1,
        }}
        duration={duration}
        className={containerClassName}
        style={containerStyle}
        size={containerSize}
      >
        {children}
      </ParentComponent>
      <div
        //onClick={() => setIsActive(!isActive)}
        className="absolute w-[50px] h-[50px] bg-red-100 rounded-full cursor-pointer"
      />
    </div>
  );
}
