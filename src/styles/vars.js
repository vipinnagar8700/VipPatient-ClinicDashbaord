export const colors = {
    pink: '#DE0D92',
    yellow: '#FDCA40',
    peach: '#FF715B',
    teal: '#34D1BF',
    green: '#7ED321',
    red: '#ED0423',
    absolute_red: '#FF0000',
    purple: '#6665DD',
    orange: '#F17105',
    azure: '#0496FF',
    blue: '#2662F0',
    electro: '#29E7CD',
    gray: '#636D73',
    secondary: '#90A1AC',
    light_gray: '#E4EAF0',
    dark: '#25292D',
    success: '#2e7d32',
    error: '#d32f2f',
}

export const confirmedPalette = {
    cold: colors.peach,
    fracture: colors.green,
    concussion: colors.azure,
    hepatitis: colors.purple,
    dermatitis: colors.electro,
    diabetes: colors.pink
}

export const fonts = {
    accent: '"Rubik", sans-serif',
    body: '"Roboto", sans-serif'
}

export const textSizes = {
    8: '0.5rem',
    10: '0.625rem',
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    18: '1.125rem',
    20: '1.25rem',
    24: '1.5rem',
    26: '1.625rem',
    28: '1.75rem',
    32: '2rem',
    40: '2.5rem',
}

export const light = {
    bodyBg: '#F1F5F8',
    widgetBg: '#fff',
    highlight: '#FAFBFD',
    text: '#414D55',
    shadow: 'linear-gradient(270deg, rgba(255, 255, 255, 0.0001) 0%, #fff 100%)'
}

export const dark = {
    bodyBg: '#090A0A',
    widgetBg: '#171819',
    highlight: '#131414',
    text: '#9EA7AC',
    shadow: 'linear-gradient(270deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)',
    shadowDarker: 'linear-gradient(270deg, rgba(23, 24, 25, 0.0001) 0%, #090A0A 100%)'
}

export const effects = {
    dashedDark: `1px dashed ${colors.dark}`,
    dashedLight: `1px dashed #A2C0D4`,
    widgetShadow: '0 1px 8px rgba(20, 46, 110, 0.1)',
    darkerShadow: '0 1px 8px rgba(0, 0, 0, 0.3)',
}

export const breakpoints = {
    mobileS: '@media screen and (min-width: 320px)',
    landscapeS: '@media screen and (min-width: 567.98px)',
    mobileM: '@media screen and (min-width: 374.98px)',
    mobileL: '@media screen and (min-width: 413.98px)',
    tablet: '@media screen and (min-width: 767.98px)',
    laptop: '@media screen and (min-width: 1023.98px)',
    laptopL: '@media screen and (min-width: 1279.98px)',
    desktop: '@media screen and (min-width: 1599.98px)',
}

export const flex = {
    col: `
      display: flex;
      flex-direction: column;
    `,
    center: `
     align-items: center;
     justify-content: center;
    `,
    between: `
     align-items: center;
     justify-content: space-between;
    `,
}