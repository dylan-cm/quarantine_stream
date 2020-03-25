const S = {}

S.t = {
  colors: {
    light: '#F8F4EA',
    dark: '#260433',
    green: '#99FDD3',
    purple: '#BF99FD',
    orange: '#FDB899',
    red: '#FD99AC',
    blue: '#99DAFD',
  },
  layout: {
    textAlign: 'center',
  },
}

S.global = {
  html: {
    height: '100%',
    width: '100%',
    backgroundColor: S.t.colors.dark,
    color: S.t.colors.light,
  },

  body: {
    margin: 0,
    padding: 0,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
      'Lato',
      'Source Sans Pro',
    ],
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  code: {
    fontFamily: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
  },
}

export default S
