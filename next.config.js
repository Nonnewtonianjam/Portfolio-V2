module.exports = {
  reactStrictMode: true,
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    formats: ['image/webp']
  }
}
