module.exports = {
  content: ['./src/**/*.tsx', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#3232DE',
        alert: {
          100: '#E53821',
          50: '#EB7F71',
          0: '#FACBC5'
        },
        dark: {
          20: '#C9C9CD',
          40: '#95959B',
          60: '#66666C',
          80: '#3D3D42',
          90: '#2C2C33',
          100: '#19191C'
        }
      }
    }
  },
  plugins: []
};
