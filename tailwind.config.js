/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            spacing: {
                '120': '30rem',
            }
        },
    },
    plugins: [],
};
