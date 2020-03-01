// data
import articles from './data/articles.json'

import getPageStructure from './get-page-structure'
import getArticles from './get-articles'
import menuEvents from './menu-events'
import getSpam from './get-spam'

// render page structure
console.time('render page structure')
getPageStructure(articles.all.length)
getArticles(articles.all)
console.timeEnd('render page structure')

menuEvents()
getSpam()