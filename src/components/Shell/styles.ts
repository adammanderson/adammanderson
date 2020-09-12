export default {
  wrapper: {
    minHeight: '100vh',
    flexFlow: 'row nowrap',
  },
  blurb: {
    position: 'sticky' as const,
    top: 0,
    height: '100vh',
    width: '100px',
    py: 3,
    alignItems: 'flex-end',
    h2: {
      transform: 'rotate(-90deg) translateY(50px)',
      transformOrigin: 'left center',
      whiteSpace: 'nowrap',
    },
  },
  header: {
    justifyContent: 'center',
    p: 5,
  },
};
