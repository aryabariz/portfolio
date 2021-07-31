module.exports = {
  purge: { enabled: true, content: ['./src/**/*.tsx'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: '#f3eb04',
        pink: '#fc6384',
        cyan: '#02d7f2',
      },
      height: {
        screen: 'var(--vh)',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active', 'hover'],
      backgroundColor: ['active', 'hover'],
      borderColor: ['active'],
    },
  },
  plugins: [],
};
