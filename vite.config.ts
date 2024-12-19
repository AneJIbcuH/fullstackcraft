import { defineConfig } from 'vite'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
// @ts-ignore
import imagemin from 'unplugin-imagemin/vite'

const __dirname = resolve()
export default defineConfig({
	base: './',
	root: resolve(__dirname, 'src'),
	build: {
		outDir: resolve(__dirname, 'dist'),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				index: resolve(__dirname, 'src/index.html'),
			},
			output: {
				chunkFileNames: 'js/[name].[hash].js',
				entryFileNames: 'js/[name].js',
				assetFileNames: ({ name }) => {
					console.log(name)
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
						return 'img/[name][extname]'
					}

					if (/\.css$/.test(name ?? '')) {
						return 'css/[name][extname]'
					}

					if (/\.(woff|woff2)$/.test(name ?? '')) {
						return 'fonts/[name][extname]'
					}

					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return '[name][extname]'
				},
			},
		},
	},
	plugins: [
		imagemin({
			// Default mode sharp. support squoosh and sharp
			mode: 'sharp',
			beforeBundle: false,
			// Default configuration options for compressing different pictures
			compress: {
				jpg: {
					quality: 100,
				},
				jpeg: {
					quality: 100,
				},
				png: {
					quality: 100,
				},
				webp: {
					quality: 100,
				},
			},
			conversion: [
				{ from: 'jpeg', to: 'webp' },
				{ from: 'png', to: 'webp' },
				{ from: 'JPG', to: 'webp' },
			],
		}),
	],
	css: {
		postcss: {
			plugins: [autoprefixer],
		},
	},
	experimental: {
		renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
			if (hostType === 'css') {
				return '../' + filename
			}
		},
	},
})
