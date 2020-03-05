let post_plugin_autoprefixer = require('autoprefixer')
let postcss_import = require('postcss-import')

module.exports= {
    plugins: [
        post_plugin_autoprefixer({
            browsers: ['>0%']
        }),
        postcss_import
    ]
}
