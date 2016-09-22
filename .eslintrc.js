module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
      "browser": true,
      "node": true,
      "mocha": true
    },
    "rules": {
      "comma-dangle": [
        1,
        "only-multiline"
      ],
     "quotes": [
        1,
        "single"
      ],
      "spaced-comment": [
        1,
        "always"
      ],
      "space-before-function-paren": 1,
      "max-len": [
        1,
        100
      ],
      "no-var": 1,
      "no-unused-vars": 1,
      "import/no-extraneous-dependencies": [
        2,
        {"devDependencies": true}
      ]
    }
};
