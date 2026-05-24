import { motion } from "framer-motion";
import { forwardRef } from "react";

const AnimatedImage = forwardRef(({
  src,
  alt,
  className,
  origin = "top",
  distance = 50,
  duration = 1.2,
  delay = 0.4,
  opacity = 1,
  rotate = 0,
  ...rest
}, ref) => {
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
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      initial={{ opacity: 0, x, y, rotate }}
      whileInView={{ opacity: opacity, x: 0, y: 0, rotate: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.3 }}
      {...rest}
    />
  );
});

export default AnimatedImage;
