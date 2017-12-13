module.exports = {
    clean: ['dist'],
    script: {
        libs: 'libs/spirit/**/*.js',
        order: ['zepto/zepto.js', 'zepto/module/*.js', 'swipeSlide.js', 'ydui.js'],
        build: 'spirit.js',
        base: 'libs/spirit',
        dist: 'dist'
    },
    style: {
        src: 'libs/**/*.css',
        dist: 'dist',
        build: 'spirit.css'
    },
    copy: {
        src: ['libs/ydui.flexible.js', 'libs/yudi.js'],
        dist: 'dist'
    }
}