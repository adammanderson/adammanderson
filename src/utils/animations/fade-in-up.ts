export default {
  enter: {
    y: '0%',
    opacity: 1,
    delay: 500,
    transition: {
      type: 'spring',
      stiffness: 30,
      damping: 150,
    },
  },
  exit: {
    y: 0,
    opacity: 0.05,
  },
};
