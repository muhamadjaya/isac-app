const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './node_modules/flowbite-react/**/*.js',
        './src/**/*.js',
        './src/**/*.jsx',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require("flowbite/plugin"),
    ],
}
