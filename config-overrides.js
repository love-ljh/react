const { override, addPostcssPlugins,fixBabelImports } = require('customize-cra');
module.exports = {
    webpack: override(
        addPostcssPlugins([require('postcss-pxtorem')({ rootValue: 75, propList: ['*'], minPixelValue: 2, selectorBlackList: ['am-'] })]),
        fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css',
        }),
    )
}
