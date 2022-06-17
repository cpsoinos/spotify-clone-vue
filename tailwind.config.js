module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    fontFamily: {
      apple: ['sf-pro', 'helvetica', 'system-ui', 'sans-serif'],
      spotify: ['spotify-circular', 'system-ui', 'sans-serif']
    },
    extend: {
      colors: {
        spotify: {
          backgroundBase: '#121212',
          backgroundHighlight: '#1a1a1a',
          backgroundPress: '#000',
          backgroundElevatedBase: '#242424',
          backgroundElevatedHighlight: '#2a2a2a',
          backgroundElevatedPress: '#000',
          backgroundTintedBase: 'hsla(0,0%,100%,0.07)',
          backgroundTintedHighlight: 'hsla(0,0%,100%,0.1)',
          backgroundTintedPress: 'hsla(0,0%,100%,0.04)',
          backgroundUnsafeForSmallTextBase: '#121212',
          backgroundUnsafeForSmallTextHighlight: '#121212',
          backgroundUnsafeForSmallTextPress: '#121212',
          textBase: '#fff',
          textSubdued: '#a7a7a7',
          textBrightAccent: '#1ed760',
          textNegative: '#f15e6c',
          textWarning: '#ffa42b',
          textPositive: '#1ed760',
          textAnnouncement: '#3d91f4',
          essentialBase: '#fff',
          essentialSubdued: '#727272',
          essentialBrightAccent: '#1ed760',
          essentialNegative: '#e91429',
          essentialWarning: '#ffa42b',
          essentialPositive: '#1ed760',
          essentialAnnouncement: '#0d72ea',
          decorativeBase: '#fff',
          decorativeSubdued: '#292929',
          essentialBrightAccent: '#1ed760'
        }
      },
      fontSize: {
        xxs: '0.7rem'
      }
    }
  },
  plugins: []
}
