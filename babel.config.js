

module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                "browsers": ["last 3 versions", "safari >= 7"]
            },
        }],
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ]
};
