const date = new Date()

const footer = [
    ['footer'],
        ['p'],
            '&copy; ', {var: 'year'},
        ['/p'],
        {var: 'links'},
    ['/footer']
]

const mod = {
    var: {
        year: [date.getFullYear()],
        links: [
            ['ul', {class:'footer_list'}],
                ['li'],['a', {href:'#'}],'link 1',['/a'],['/li'],
                ['li'],['a', {href:'#'}],'link 2',['/a'],['/li'],
                ['li'],['a', {href:'#'}],'link 3',['/a'],['/li'],
                ['li'],['a', {href:'#'}],'link 4',['/a'],['/li'],
            ['/ul']
        ]
    }
}

export {footer, mod as footerMod}