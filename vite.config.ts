// vite.config.ts
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { name, peerDependencies } from './package.json';

const __dirname = dirname(fileURLToPath(import.meta.url));

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
	plugins: [
		react(),
		dts({
			include: ['src/**/*'],
			entryRoot: 'src',
			outDir: 'dist',
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json',
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			entry: 'src/index.ts',
			name,
			formats: ['es', 'umd'],
			fileName: (format) => `${name}.${format}.js`,
			cssFileName: 'styles',
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
