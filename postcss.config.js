const mixins = require('./src/styles/mixins/index.js');

module.exports = {
    plugins: [
        require('postcss-mixins')({
            mixins: mixins,
        }),
        require('postcss-cssnext')({
            features: {
                customProperties: { variables: false }, //replaced by postcss-css-variables
                calc: { preserve: true }
            },
        }),
        require('postcss-css-variables'),
    ]
};
