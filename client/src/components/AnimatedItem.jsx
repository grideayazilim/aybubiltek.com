import { motion } from "framer-motion";

const AnimatedItem = ({
  hasInterval = false,
  className,
  children,
  origin = "top",
  distance = 50,
  duration = 1.2,
  delay = 0.4,
  interval = 0.2,
  motionIndex = 1,
  onViewportEnter,
}) => {
  let x = 0;
  let y = 0;

  switch (origin) {
    case "top":
      y = -distance;
      break;
    case "bottom":
      y = distance;
      break;
    case "left":
      x = -distance;
      break;
    case "right":
      x = distance;
      break;
    default:
      y = distance;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        delay: hasInterval ? delay + motionIndex * interval : delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={onViewportEnter}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
