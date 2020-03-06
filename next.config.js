const { join } = require('path')

const withCSS = require('@zeit/next-css'),
    withStylus = require('@zeit/next-stylus'),
    withOffline = require('next-offline'),
    withAnalyze = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
    }),
    withPlugins = require('next-compose-plugins')

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin')

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
                            'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/',
                    },
                ],
            },
        ],
        [
            withOffline,
            {
                dontAutoRegisterSw: true,
                workboxOpts: {
                    swDest: 'static/service-worker.js',
                    runtimeCaching: [
                        {
                            urlPattern: /.js$|.ttf$|.otf$|.css$|.svg$|.jpg$|.png$/,
                            handler: 'CacheFirst',
                        },
                    ],
                },
            },
        ],
    ],
    {
        target: 'serverless',
        experimental: {
            modern: true,
            polyfillsOptimization: true,
        },
        webpack(config, options) {
            const splitChunks =
				config.optimization && config.optimization.splitChunks
				
            if (splitChunks) {
                const cacheGroups = splitChunks.cacheGroups
                const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
                if (cacheGroups.framework) {
                    cacheGroups.preact = Object.assign(
                        {},
                        cacheGroups.framework,
                        {
                            test: preactModules,
                        }
                    )
                    cacheGroups.commons.name = 'framework'
				} else
                    cacheGroups.preact = {
                        name: 'commons',
                        chunks: 'all',
                        test: preactModules,
                    }
                
            }

            config.optimization.minimize = true
            config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
            config.optimization.minimizer.push(
                new TerserPlugin({
                    terserOptions: {
                        mangle: true, // Note `mangle.properties` is `false` by default.
                    },
                })
            )

            config.resolve.alias = {
                ...config.resolve.alias,
                react: 'preact/compat',
                'react-dom': 'preact/compat',
                'react-render-to-string': 'preact-render-to-stirng',
                pages: join(__dirname, 'pages'),
                '~': join(__dirname, 'public'),
                styles: join(__dirname, 'public/styles'),
                fonts: join(__dirname, 'public/fonts'),
                components: join(__dirname, 'components'),
                libs: join(__dirname, 'libs'),
                pageTypes: join(__dirname, 'pageTypes'),
                stores: join(__dirname, 'stores'),
                layouts: join(__dirname, 'layouts'),
            }

            return config
        },
    }
)
