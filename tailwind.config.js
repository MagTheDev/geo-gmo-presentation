

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        /* eslint-disable */
        fontFamily: {
            space: ['Space Mono', 'monospace'],
        },


        /* eslint-enable */
        extend: {

            colors: {
                deep: {
                    100: "#ccd0d9",
                    200: "#99a1b3",
                    300: "#66728c",
                    400: "#334366",
                    500: "#001440",
                    600: "#001033",
                    700: "#000c26",
                    800: "#00081a",
                    900: "#00040d"
                },

                keyframes: {
                    'fade-to-right': {
                        '0%': {
                            opacity: '0.2',
                            transform: 'translateX(-40px)',
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateX(0)',
                        },
                    },
                    'fade-to-down': {
                        '0%': {
                            opacity: '0.2',
                            transform: 'translateY(-30px)',
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateY(0)',
                        },
                    },
                    'fade-to-left': {
                        '0%': {
                            opacity: '0.2',
                            transform: 'translateX(40px)',
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateX(0)',
                        },
                    },
                    'fade-to-up': {
                        '0%': {
                            opacity: '0.2',
                            transform: 'translateY(30px)',
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateY(0)',
                        },
                    },
                },
                animation: {
                    'fade-to-right': 'fade-to-right 0.5s ease-out',
                    'fade-to-down': 'fade-to-down 0.5s ease-out',
                    'fade-to-left': 'fade-to-left 0.5s ease-out',
                    'fade-to-up': 'fade-to-up 0.5s ease-out',
                },
                maxWidth: {
                    '7xl': '112rem',
                },
            },
        }
    }
}