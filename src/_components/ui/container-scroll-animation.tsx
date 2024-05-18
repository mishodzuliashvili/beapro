"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 3], [0, 30]);

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={
        {
          // perspective: "1000px",
          // rotateX: rotate,
        }
      }
    >
      <motion.div
        style={{
          perspective: "1000px",

          rotateX: rotate,
        }}
      >
        <div>{children}</div>
      </motion.div>
    </motion.div>
  );
};
