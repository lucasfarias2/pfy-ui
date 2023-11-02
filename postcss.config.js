export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // eslint-disable-next-line no-undef
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./src/**/*.{js,ts,jsx,tsx}'],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
};
