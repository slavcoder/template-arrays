import articles from './data/articles.json'
import getPageStructure from './get-page-structure'
import getArticles from './get-articles'
import menuEvents from './menu-events'
import getSpam from './get-spam'

getPageStructure()
getArticles(articles.all)
menuEvents()
getSpam()