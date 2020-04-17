module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint",
    "jest",
  ],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    "no-prototype-builtins": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    'spaced-comment': ['error', 'always', {
      'markers': ['/'],
    }],
    "import/extensions": [
      "error",
      "never",
    ]
  },
}
