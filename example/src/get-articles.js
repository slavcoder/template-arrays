import render from '../../src/render'
import article from './template/article.js'

function getArticles(data) {
    const articlesContainer = document.querySelector('.articlesContainer')
    let allArticles = ''

    data.forEach(item => {
        allArticles += render(article, {
            var: {
                title: item.title,
                author: item.author,
                content: item.content
            }
        })
    })

    articlesContainer.innerHTML = allArticles 
}

export default getArticles