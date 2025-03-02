import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorType, setCursorType] = useState("auto");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  console.log(isMobile);
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    document.addEventListener("mouseover", (e) => {
      const tgt = e.target;
      const computed = window.getComputedStyle(tgt)["cursor"];
      setCursorType(computed);
    });

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <AnimatePresence>
          {cursorType !== "auto" ? (
            <motion.div
              id="cursor"
              className={`pointer-events-none fixed top-0 left-0 z-1000 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent mix-blend-difference`}
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
            >
              <motion.div
                className={`relative top-1/2 left-1/2 z-1001 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference`}
                animate={{ scale: 12 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
              />
            </motion.div>
          ) : (
            <motion.div
              id="cursor"
              className={`pointer-events-none fixed top-0 left-0 z-1000 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-transparent mix-blend-difference`}
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              exit={{ scale: 0 }}
            >
              <motion.div
                className={`relative top-1/2 left-1/2 z-1001 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference`}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
