import render from '../../src/render'
import nav from './template/nav'
import main from './template/main'
import {footer, footerMod} from './template/footer'

function getPageStructure(articlesCount) {
    let page = ''
    
    page += render(nav)
    page += render(main, {
        var: {
            countArticles: articlesCount
        }
    })
    page += render(footer, footerMod)

    document.body.innerHTML = page 
}

export default getPageStructure