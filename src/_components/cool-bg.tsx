"use client";
import { motion, useScroll, useTransform } from "framer-motion";

type CoolBGProps = {
  width?: number;
};

export default function CoolBG({ width = 200 }: CoolBGProps) {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 300], [0, -300]);
  const minusX = useTransform(scrollY, [0, 300], [0, 300]);

  return (
    <>
      <div className="hidden lg:block fixed top-[72px] bottom-0 left-0 right-0 pointer-events-none">
        <motion.div
          className="bg-primary h-full left-0 top-0 absolute rounded-r-full"
          style={{ x, width }}
        ></motion.div>
        <motion.div
          className="bg-primary h-full right-0 top-0 absolute rounded-l-full"
          style={{ translateX: minusX, width }}
        ></motion.div>
      </div>
    </>
  );
}
