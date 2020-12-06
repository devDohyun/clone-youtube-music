require('dotenv').config({ path: '.env' })

export default {
    server: {
        host: process.env.SERVER_HOST || 'localhost',
        port: process.env.SERVER_PORT || 80
    },
    env: {
        NAME: process.env.NAME,
        HEADER_TITLE: process.env.HEADER_TITLE
    },

    globalName: 'DotubeMusic',
    head: {
        titleTemplate: '%s - ' + process.env.HEADER_TITLE,
        title: process.env.HEADER_TITLE || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]
    },

    modules: [
        '@nuxtjs/style-resources',
    ],
    buildModules: [
        '@nuxtjs/fontawesome',
    ],


    styleResources: {
        scss: [
            '~assets/styles/variables.scss',
            '~assets/styles/default.scss'
        ]
    },

    plugins: [
    { src: '~/plugins/common' }
    ],

    fontawesome: {
        component: 'fa',
        suffix: true,
  
        icons: {
            solid: [
                'faPlay',
                'faPause',
                'faCaretUp',
                'faCaretDown',
                'faStepBackward',
                'faStepForward',
                'faEllipsisV',
                'faVolumeDown',
                'faRecordVinyl',
                'faChartLine',
                'faLaugh',
                'faMicrophone',
                'faMusic',
                'faHome',
                'faCompass',
                'faFileAudio',
                'faSearch'

            ],
            regular: [
                'faThumbsUp',
                'faThumbsDown',
                'faPlayCircle'
            ],
            brands: [
                'faYoutube'
            ]
        }
    }
}