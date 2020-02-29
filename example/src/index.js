import getArticles from './get-articles'
import spam from './spam'
import render from '../../src/render'
import articles from './data/articles.json'

// templates:
import nav from './template/nav'
import main from './template/main'
import {footer, footerMod} from './template/footer'


console.time('render')
document.body.innerHTML = render(nav) 
                        + render(main, {
                            var: {
                                countArticles: articles.articles.length
                            }
                        })
                        + render(footer, footerMod)

getArticles(articles.articles)
console.timeEnd('render')

console.time('spam')
const spamContainer = document.querySelector('.spamContainer')
let spamContent = ''

for(let i=1; i<=10000; i++) {
    spamContent += render(spam, {
        var: {random: i},
        attr: {
            spam: {
                class: 'someClassName',
                style: `
                    background-color: rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)});
                    border-radius: ${i % 9 == 0 ? '50%' : '0'}               `
            }
        }
    })
}

spamContainer.innerHTML = spamContent
console.timeEnd('spam')