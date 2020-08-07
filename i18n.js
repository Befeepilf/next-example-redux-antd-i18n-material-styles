import NextI18Next from 'next-i18next';
const {localeSubpaths} = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
    otherLanguages: ['de'],
    localeSubpaths,
    localePath: path.resolve('./public/static/locales')
});