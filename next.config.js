const { join } = require("path")

const withCSS = require("@zeit/next-css"),
	withStylus = require("@zeit/next-stylus"),
	withOffline = require("next-offline"),
	withAnalyze = require("@next/bundle-analyzer")({
		enabled: process.env.ANALYZE === "true"
	}),
	withPlugins = require("next-compose-plugins")

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
	TerserPlugin = require("terser-webpack-plugin")

module.exports = withPlugins(
	[
		[withAnalyze],
		[withCSS],
		[
			withStylus,
			{
				loaders: [
					{
						test: /\.styl$/,
						loader:
							"css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/"
					}
				]
			}
		],
		[
			withOffline,
			{
				dontAutoRegisterSw: true,
				workboxOpts: {
					swDest: "static/service-worker.js",
					runtimeCaching: [
						{
							urlPattern: /.js$|.ttf$|.otf$|.css$|.svg$|.jpg$|.png$/,
							handler: "CacheFirst"
						}
					]
				}
			}
		]
	],
	{
		target: "serverless",
		webpack(config, options) {
			config.optimization.minimize = true
			config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
			config.optimization.minimizer.push(
				new TerserPlugin({
					terserOptions: {
						mangle: true // Note `mangle.properties` is `false` by default.
					}
				})
			)

			config.resolve.alias["react"] = "preact/compat"
			config.resolve.alias["react-dom"] = "preact/compat"
			config.resolve.alias["react-render-to-string"] =
				"preact-render-to-string"

			config.resolve.alias["pages"] = join(__dirname, "pages")
			config.resolve.alias["stylus"] = join(__dirname, "public/stylus")
			config.resolve.alias["fonts"] = join(__dirname, "public/fonts")
			config.resolve.alias["images"] = join(__dirname, "public/images")
			config.resolve.alias["components"] = join(__dirname, "components")
			config.resolve.alias["~"] = __dirname
			config.resolve.alias["libs"] = join(__dirname, "libs")
			config.resolve.alias["pageTypes"] = join(__dirname, "pageTypes")

			config.resolve.alias["stores"] = join(__dirname, "stores")
			config.resolve.alias["layouts"] = join(__dirname, "layouts")

			return config
		}
	}
)
