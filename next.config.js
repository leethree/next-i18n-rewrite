const withTM = require('@vercel/edge-functions-ui/transpile')()

module.exports = withTM({
  i18n: {
    locales: [
      'default',
      'en',
      'es',
      'fr',
      'zh',
    ],
    defaultLocale: 'default',
    localeDetection: false,
  },
})
