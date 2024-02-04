// tailwind.config.js

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lemon: {
          300: '#A8FF35',
          400: '#97E630',
          900: '#7EBF28',
        },

        gray: {
          100: '#F2F2FA',
          200: '#E1E1E6',
          300: '#A8A8B3',
          700: '#29292E',
          800: '#202024',
          900: '#121214',
        },

        success: {
          400: '#04D361',
        },

        danger: {
          400: '#FF3B30',
        },
      },

      fontFamily: {
        regular: 'Montserrat_400Regular',
        medium: 'Montserrat_500Medium',
        semiBold: 'Montserrat_600SemiBold',
        bold: 'Montserrat_700Bold',
      },
    },
  },
  plugins: [],
}
