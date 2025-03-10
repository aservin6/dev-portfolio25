import { motion } from "motion/react";

export default function Overlay() {
  return (
    <>
      <div className="fixed top-0 left-0 -z-10 flex h-screen w-screen items-center justify-center">
        {/* <motion.div className="backgroundMesh aspect-square h-full w-full opacity-75" />
        <div className="absolute bottom-1/3 left-1/10 aspect-square w-[150%] rounded-full bg-white blur-3xl" /> */}
        {/* <div className="relative grid h-1/2 w-1/2 grid-cols-3 overflow-hidden rounded-full blur-3xl">
          <div className="h-full w-full translate-x-15 translate-y-15 bg-blue-500"></div>
          <div className="h-full w-full translate-x-10 translate-y-5 bg-pink-500"></div>
          <div className="h-full w-full -translate-x-10 translate-y-40 bg-green-500"></div>
          <div className="h-full w-full translate-x-30 -translate-y-20 bg-red-500"></div>
          <div className="h-full w-full -translate-x-10 -translate-y-30 bg-purple-500"></div>
          <div className="h-full w-full -translate-x-40 -translate-y-10 bg-yellow-500"></div>
        </div> */}
        {/* <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, ease: "linear", repeat: Infinity }}
          className="backgroundMesh aspect-[10/9] w-2/5 -translate-y-25 rounded-full blur-xl"
        ></motion.div> */}
      </div>
      <div className="noiseFilter pointer-events-none fixed top-0 left-0 z-20 h-screen w-screen" />
    </>
  );
}
