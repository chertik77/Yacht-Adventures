import { defineConfig } from 'vite';
import { glob } from 'glob';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/index.html'),
    },
    minify: false,
    cssMinify: false,
    outDir: '../dist',
    assetsDir: '',
  },
  plugins: [ViteMinifyPlugin({ minifyCSS: true, minifyJS: true })],
});
