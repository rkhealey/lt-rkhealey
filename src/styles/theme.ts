import logo from '../images/logo.svg';

const colors = {
  text: '#263238',
  background: '#fff',
  primary: '#39e09b',
};

const fonts = {
  body: 'Karla, sans-serif',
};

export default {
  buttons: {
    block: {
      display: 'block',
      backgroundColor: 'primary',
      color: 'text',
      cursor: 'pointer',
      fontSize: 1,
      height: '48px',
      lineHeight: '48px',
      py: 0,
      ':hover': {
        backgroundColor: 'text',
        color: 'primary',
      },
    },
  },
  colors,
  fonts,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128],
  variants: {
    avatar: {
      height: 64,
      width: 64,
      borderRadius: 9999,
    },
    wrapper: {
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left 50% bottom 32px',
      maxWidth: '700px',
      mx: 'auto',
      pt: 5,
      pb: 7,
      px: 4,
    },
  },
};
