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

        bgColor: {
          800: '#1D1F24',
        },

        gray: {
          g100: '#F2F2FA',
          g200: '#E1E1E6',
          g300: '#A8A8B3',
          g700: '#29292E',
          g800: '#202024',
          g900: '#121214',
        },

        success: {
          400: '#04D361',
        },

        danger: {
          400: '#FF3B30',
        },
      },

      fontFamily: {
        400: 'Montserrat_400Regular',
        500: 'Montserrat_500Medium',
        600: 'Montserrat_600SemiBold',
        700: 'Montserrat_700Bold',
      },
    },
  },
  plugins: [],
}
