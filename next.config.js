// require('dotenv').config()

module.exports = {
    trailingSlash: false,
    generateBuildId: async () => {
        return 'vaigmania'
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
    return {
            '/': { page: '/' },
            '/500': { page: '/500' },
            '/404': { page: '/404' }
        }
    },
    // cache: {
    //     type: 'filesystem',
    //     buildDependencies: {
    //         config: [__filename],
    //     },
    // },
    future: {
        webpack5: false,
    },
    // env: {
    //     API_ENV: process.env.API_ENV,
    //     URL_API_ADDRESS: process.env.URL_API_ADDRESS,
    // },
    // i18n: {
    //     locales: ['en-US', 'fr', 'nl-NL'],
    //     defaultLocale: 'en-US',
    // },
}