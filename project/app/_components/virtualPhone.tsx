import { motion } from "framer-motion";
import Image from "next/image";
import LandingImg4 from "@/public/assets/background/landingImg4.png"
import { ShimmerBtn } from "./shimmer-btn";

const VirtualPhone = () => {
  return (

    <section className="grid place-content-center">
      <FloatingPhone />
    </section>
  );

};

const FloatingPhone = () => {

  return (
    <div
      style={{

        transformStyle: "preserve-3d",

        transform: "rotateY(-30deg) rotateX(15deg)",

      }}
      className="rounded-[24px] bg-gradient-to-t from-gray-400 via-gray-200 to-gray-600"

    >

      <motion.div

        initial={{
          transform: "translateZ(8px) translateY(-2px)",

        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,

          repeatType: "mirror",

          duration: 2,

          ease: "easeInOut",
        }}

        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"

      >
        <HeaderBar />

        <Screen />

      </motion.div>
    </div>

  );
};

const HeaderBar = () => {

  return (

    <>
      <div className="absolute left-[50%] top-2.5 z-100 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>

      <div className="absolute right-3 top-2 z-10 flex gap-2">

      </div>
    </>
  );

};


const Screen = () => {

  return (
    <div className="relative z-0 h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">

      {/* Example logo from logoispum */}

      <Image src={LandingImg4} alt="" fill/>
      

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute left-4 w-4/5 bottom-2 block md:hidden"><ShimmerBtn/></div>
    </div>

  );
};


export default VirtualPhone;