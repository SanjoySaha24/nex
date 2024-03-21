module.exports = {
  root: true,
  extends: '@react-native',
};

{
  "extends": ['eslint:recommended', 'plugin:react/recommended'],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "parser": "flow"
      }
    ]
  }
}

