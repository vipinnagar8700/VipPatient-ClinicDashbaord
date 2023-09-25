const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@ui': path.resolve(__dirname, 'src/UI'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@db': path.resolve(__dirname, 'src/db'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@fonts': path.resolve(__dirname, 'src/fonts'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@constants': path.resolve(__dirname, 'src/constants'),
        },
        configure: (webpackConfig, {env}) => {
            webpackConfig.optimization.minimizer.push(
                new ImageMinimizerPlugin({
                    generator: [
                        {
                            // You can apply generator using `?as=webp`, you can use any name and provide more options
                            preset: "webp",
                            implementation: ImageMinimizerPlugin.imageminGenerate,
                            options: {
                                // Please specify only one plugin here, multiple plugins will not work
                                plugins: ["imagemin-webp"],
                            },
                        },
                    ],
                }),
            );

            if (env === 'production') {
                webpackConfig.plugins.push(
                    new CompressionPlugin({
                        test: /\.(js|css|html)$/,
                        filename: '[path][base].gz',
                        algorithm: 'gzip',
                        threshold: 10240,
                        minRatio: 0.8,
                    }),
                );
            }

            return webpackConfig;
        },
    }
};