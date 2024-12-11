/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            boxShadow: {
                custom: 'rgba(0, 0, 0, 0.4) 0px 0px 10px',
            },
        },
    },
    plugins: [],
};
