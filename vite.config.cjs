const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  // Añadimos esta línea para que Vite reconozca las extensiones de imagen en mayúsculas
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.jpeg'],
});
