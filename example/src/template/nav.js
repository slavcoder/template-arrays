// this is just beautiful, isn't it?

const link = {
    author: 'https://github.com/slavcoder',
    project: 'https://github.com/slavcoder/template-arrays'
}

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
            ['a', {class:'menu_link', href:link.author}],'author',['/a'],
        ['/li'],
        ['li', {class:'menu_item'}],
            ['a', {class:'menu_link', href:link.project}],'project',['/a'],
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