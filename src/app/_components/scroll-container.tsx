"use client";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useScroll, useTransform } from "motion/react";
import { SignInButton } from "@clerk/nextjs";
import type { MotionValue } from "motion/react";
export default function ScrollContainer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  //const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div
      className="flex items-center justify-center relative p-20 mt-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <HeroText />
        <HeroImage rotate={rotate} scale={scale} />
      </div>
    </div>
  );
}

export function HeroText() {
  return (
    <motion.div className="flex flex-col max-w-sm md:max-w-max mx-auto">
      <div className="flex items-center flex-col">
        <Button
          size={"lg"}
          className="py-8 px-6 mb-8 md:mb-0 text-2xl mx-auto sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
        >
          <SignInButton>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
              Start For Free Today
            </span>
          </SignInButton>
        </Button>
        <h1 className="text-5xl md:text-8xl bg-clip-text tracking-tighter text-center text-transparent bg-gradient-to-b from-white to-neutral-600 font-semibold max-w-max">
          Automate with Currate
        </h1>
      </div>
    </motion.div>
  );
}

export function HeroImage({
  rotate,
  scale,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  return (
    <motion.div
      className="md:max-w-5xl mx-auto w-[30rem] md:w-full rounded-[30px] shadow-2xl h-[40rem] -mt-28"
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
    >
      <div className="bg-neutral-900 rounded-2xl h-full w-full  gap-4 overflow-hidden transition-all flex items-center justify-center">
        <Image
          src="/temp-banner.png"
          alt="bannerImage"
          width={3456}
          height={2064}
          className="object-cover border-8 border-neutral-900 rounded-2xl w-full h-full"
        />
      </div>
    </motion.div>
  );
}
