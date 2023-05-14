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
                'button-color': '#208298',
                'thanks-page-background': '#232323'
            },
            width: {
                'logo-width': '100px',
                'heading-text': '675px',
                'textarea-width': '622px'
            },
            textShadow: {
                'default': '1px 1px 0px white, 2px 1px 0px black'
            },
            spacing: {
                '325': '325px',
                '370': '370px',
                '800': '800px',
                '620': '620',
                '280': '280px',
                '575': '575px'
            },
            letterSpacing: {
                'widest': '0.2em'
            }
        },
    },
    plugins: [
        require('tailwindcss-textshadow'),
    ],
}

