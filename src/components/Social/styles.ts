export default {
  wrapper: {
    position: 'sticky' as const,
    top: 0,
    height: '100vh',
    width: '100px',
    py: 4,
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    svg: {
      color: 'heading',
    },
  },
  link: {
    display: 'flex',
    p: 3,
  },
};
