// this is just beautiful, isn't it?

const hamburger = [
    ['button', {class:'nav_hamburger hamburger'}],
        ['span', {class:'hamburger_line'}],['/span'],
        ['span', {class:'hamburger_line'}],['/span'],
        ['span', {class:'hamburger_line'}],['/span'],
    ['/button']
]

const menu = [
    ['ul', {class:'nav_menu menu'}],
        ['li', {class:'menu_item'}],['a', {class:'menu_link', href:'#'}],'link 1',['/a'],['/li'],
        ['li', {class:'menu_item'}],['a', {class:'menu_link', href:'#'}],'link 2',['/a'],['/li'],
        ['li', {class:'menu_item'}],['a', {class:'menu_link', href:'#'}],'link 3',['/a'],['/li'],
        ['li', {class:'menu_item'}],['a', {class:'menu_link', href:'#'}],'link 4',['/a'],['/li'],
        ['li', {class:'menu_item'}],['a', {class:'menu_link', href:'#'}],'link 5',['/a'],['/li'],
    ['/ul']
]

const nav = [
    ['nav', {class:'nav', id:'nav'}],
        ... hamburger,
        ... menu,
    ['/nav']
]

export default nav