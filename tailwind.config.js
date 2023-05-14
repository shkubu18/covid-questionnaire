/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'main-background': '#EAEAEA',
            },
            width: {
                'logo-width': '100px'
            },
            textShadow: {
                'default': '1px 1px 0px white, 2px 1px 0px black'
            },
            spacing: {
                '325': '325px'
            }
        },
    },
    plugins: [
        require('tailwindcss-textshadow'),
        require('@tailwindcss/forms'),
    ],
}

