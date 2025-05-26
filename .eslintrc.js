/* eslint-env node */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": ["vue"],
    "rules": {
        "vue/no-unused-components": "warn",
        "vue/multi-word-component-names": "off",
        "vue/require-default-prop": "off"
    }
};


