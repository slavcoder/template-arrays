import render from '../../src/render'
import nav from './template/nav'
import main from './template/main'
import {footer, footerMod} from './template/footer'

function getPageStructure() {
    const page = render(nav)
               + render(main)
               + render(footer, footerMod)

    document.body.innerHTML = page 
}

export default getPageStructure