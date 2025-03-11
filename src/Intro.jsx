import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

const DURATION = 0.3;
const STAGGER = 0.03;

export default function Intro({ onLinkChange }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    isInView && onLinkChange("#intro");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <section ref={sectionRef} id="intro" className="relative h-screen w-full">
      <div className="relative top-1/4 mx-auto flex max-w-fit flex-col space-y-12 md:p-5">
        <div className="flex flex-col justify-center select-none">
          <Heading>Alex&nbsp;Servin</Heading>
          <Subheading>Front-End&nbsp;Developer</Subheading>
        </div>
        {/* Background gradient */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 90, ease: "linear", repeat: Infinity }}
          className="backgroundMesh absolute -top-full left-1/2 -z-10 aspect-[10/9] w-full max-w-2xl -translate-x-1/2 rounded-full blur-xl will-change-transform"
        />
      </div>

      <BackgroundElements />
    </section>
  );
}

function Heading({ children }) {
  return (
    <motion.h1
      initial="initial"
      animate="animate"
      className="relative block cursor-default overflow-hidden text-3xl font-extrabold whitespace-nowrap uppercase will-change-transform sm:text-5xl md:text-6xl xl:text-7xl"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              animate: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
}

function Subheading({ children }) {
  const [stagger, setStagger] = useState(STAGGER);
  const [duration, setDuration] = useState(DURATION);

  useEffect(() => {
    setStagger(0);
    setDuration(0.2);
  }, []);

  return (
    <motion.h2
      initial="initial"
      animate="animate"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap"
    >
      <div className="text-stroke cursor-default text-lg font-bold text-transparent uppercase sm:text-2xl md:text-3xl xl:text-4xl">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              animate: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
              delay: stagger * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 hidden cursor-default text-base font-bold uppercase md:block md:text-lg"
        variants={{ initial: { y: "100%" }, hovered: { y: "10%" } }}
      >
        Transforming&nbsp;ideas&nbsp;into&nbsp;interactive&nbsp;experiences.
      </motion.div>
    </motion.h2>
  );
}

function BackgroundElements() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.03 }}
      transition={{ duration: 1 }}
      className="font-secondary pointer-events-none absolute top-1/5 right-0 text-[10rem] font-extrabold select-none md:top-1/6 md:right-10 md:text-[15rem] lg:text-[20rem] xl:right-1/4"
    >{`</>`}</motion.div>
  );
}
