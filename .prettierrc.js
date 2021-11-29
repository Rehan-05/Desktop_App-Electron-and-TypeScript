rules: {
  prettier / prettier['error', {
    endOfLine: 'auto'
  }]
}

module.exports = {
  root: true,
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  "extends": ["prettier"],
"plugins": ["prettier"],
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': ['error', {
      endOfLine: 'auto'
    }],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  },
};
