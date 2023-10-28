import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { glob } from 'glob';

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
