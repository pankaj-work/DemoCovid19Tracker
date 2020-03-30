const colors = {
  $white: '#ffffff',
  $black: '#000000',
  $lightGrayishBlue: '#dbe9fb',
  $lightlyDesaturatedBlue: '#6e8fbd',
  $lightGrayishCyan: '#e1fafd',
  $moderateBlue: '#4896cf',
  $veryPaleOrange: '#ffe6ce',
  $strongOrange: '#d69a23',
};

const App_THEME = {
  $buttonColor: colors.$lightGrayishBlue,
  $buttonBorder: colors.$lightlyDesaturatedBlue,
  $screenBackgroundColor: colors.$lightGrayishCyan,
};

const THEME = {
  ...App_THEME,

  // COLORS
  ...colors,
};

export {THEME as default};
