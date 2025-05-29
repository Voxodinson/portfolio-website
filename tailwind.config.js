/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./components/**/*.{vue,ts,js}",
        "./collector/**/*.{vue,ts,js}",
        "./composable/**/*.{vue,ts,js}",
        "./section/**/*.{vue,ts,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./childTable/**/*.vue",
        "./sections/**/*.vue",
        "./modal/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                anton: ['Anton', 'sans-serif'],
            },
        },
    },
    plugins: [],
}