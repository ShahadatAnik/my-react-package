// vite.config.ts
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			// Entry point for the library
			entry: 'src/index.ts',
			name: 'MyReactPackage', // Global variable name for UMD build
			fileName: (format) => `my-react-package.${format}.js`, // Output file name
			formats: ['es', 'umd'], // Build both ES Module and UMD formats
		},
		rollupOptions: {
			// Externalize dependencies that shouldn't be bundled into your library
			external: [
				'@radix-ui/react-slot',
				'@tailwindcss/vite',
				'class-variance-authority',
				'clsx',
				'lucide-react',
				'react',
				'react-dom',
				'tailwind-merge',
				'tailwindcss',
			],
			output: {
				// Global variables to use for externalized deps in UMD build
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'@tailwindcss/vite': '@tailwindcss/vite',
					'@radix-ui/react-slot': '@radix-ui/react-slot',
					'class-variance-authority': 'class-variance-authority',
					clsx: 'clsx',
					'lucide-react': 'lucide-react',
					'tailwind-merge': 'tailwind-merge',
					tailwindcss: 'tailwindcss',
				},
			},
		},
		sourcemap: true, // Generate sourcemaps
		emptyOutDir: true, // Clear the dist directory before building
	},
});
