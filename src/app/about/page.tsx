"use client";
import { BackgroundBeams } from "@/_components/ui/background-beams";
import { BackgroundGradientAnimation } from "@/_components/ui/background-gradient-animation";
import { ContainerScroll } from "@/_components/ui/container-scroll-animation";
import { Button, Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { RadioGroup, Radio } from "@nextui-org/react";
type AboutPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function AboutPage({ params, searchParams }: AboutPageProps) {
  return (
    <>
      {/* <ContainerScroll titleComponent={null}>he</ContainerScroll> */}
      {/* <BackgroundBeams /> */}
      {/* <BackgroundGradientAnimation /> */}
      <div className="flex items-center justify-center h-full container">
        <div className="max-w-screen-sm w-full">
          <div className="flex items-center justify-between opacity-60">
            <span>პერსონალითი</span>
            <span>2/10</span>
          </div>
          <h3 className="text-xl mt-3">როგორი ადგილი მოგწონს?</h3>
          <RadioGroup className="mt-4">
            <Radio value="buenos-aires" className="" size="lg">
              წყნარი
            </Radio>
            <Radio value="buenos-ares" className="text-xl" size="lg">
              ხმაურიანი
            </Radio>
          </RadioGroup>
          <div className="mt-4 flex gap-2 items-center w-full justify-end">
            <Button>წინა</Button>
            <Button color="primary">შემდეგი</Button>
          </div>
        </div>
      </div>
    </>
  );
}
