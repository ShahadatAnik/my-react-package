// vite.config.ts
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { name, peerDependencies } from './package.json';

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ['src/**/*'],
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			// Entry point for the library
			entry: 'src/index.ts',
			name: name, // Global variable name for UMD build
			formats: ['es', 'umd'], // Build both ES Module and UMD formats
			fileName: (format) => `${name}.${format}.js`, // Output file name
		},
		rollupOptions: {
			external: [...Object.keys(peerDependencies)],
			output: {
				inlineDynamicImports: false,
				// preserveModules: true,
				exports: 'named',
			},
		},
		sourcemap: true, // Generate sourcemaps
		emptyOutDir: true, // Clear the dist directory before building
	},
});
