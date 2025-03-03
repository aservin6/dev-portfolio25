import { motion } from "motion/react";

export default function Overlay() {
  return (
    <>
      <div className="fixed top-0 left-0 isolate -z-10 h-screen w-screen">
        {/* <div className="backgroundMesh aspect-square w-full opacity-85" />
        <div className="absolute bottom-0 left-0 aspect-square w-[150%] rounded-full bg-white blur-3xl" /> */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="backgroundMesh absolute bottom-0 left-0 aspect-square w-full -translate-x-1/3 translate-y-1/4 rounded-full mix-blend-color blur-2xl will-change-transform sm:w-11/12 sm:-translate-x-1/2 sm:translate-y-1/2 sm:blur-[52px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 105, repeat: Infinity, ease: "linear" }}
          className="backgroundMesh absolute top-0 right-0 aspect-square w-full translate-x-1/3 -translate-y-1/3 rotate-45 rounded-full mix-blend-color blur-2xl will-change-transform sm:w-11/12 sm:translate-x-1/2 sm:-translate-y-2/3 sm:blur-[52px]"
        />
      </div>
      <div className="noiseFilter pointer-events-none fixed top-0 left-0 z-20 h-screen w-screen" />
    </>
  );
}
