// this is just beautiful, isn't it?
import links from '../helper/links'

const hamburger = [
    ['button', {class:'nav_hamburger hamburger'}],
        ['span', {class:'hamburger_line'}],['/span'],
        ['span', {class:'hamburger_line'}],['/span'],
        ['span', {class:'hamburger_line'}],['/span'],
    ['/button']
]

const menu = [
    ['ul', {class:'nav_menu menu'}],
        ['li', {class:'menu_item'}],
            ['a', {class:'menu_link', href:links.author}],'author',['/a'],
        ['/li'],
        ['li', {class:'menu_item'}],
            ['a', {class:'menu_link', href:links.repo}],'project',['/a'],
        ['/li'],
    ['/ul']
]

const nav = [
    ['nav', {class:'nav', id:'nav'}],
        ... hamburger,
        ... menu,
    ['/nav']
]

export default nav