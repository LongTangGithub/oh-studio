module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-preset-env')({
            stage: 1, // Set the stage to control the features you want to use
            features: {
              'nesting-rules': true, // Enable CSS nesting
              // Add other features here
            },
            autoprefixer: { grid: true } // Enable Autoprefixer with grid support
        }),
        require('postcss-mixins'),
    ],
};