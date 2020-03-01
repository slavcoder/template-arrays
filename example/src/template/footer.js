// this file is quite a mess, but it is all for a reason
// read comments to learn more about this concept

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
        year: date.getFullYear(),

        // you can add more template array inside var,
        // and even do this again in this scope, like in 'links var' below
        // no need to worry about order, you can define img2 earlier as well or not define at all
        img2: [
            ['img', {src:'https://placekitten.com/200/300', class:'footer_img'}]
        ],

        links: [
            ['ul', {class:'footer_list'}],
                // you can add comments inside array template, no worries
                ['li'],['a', {href:'#'}],'link 1',['/a'],['/li'],
                ['li'],['a', {href:'#'}],'link 2',['/a'],['/li'],
                ['li'],['a', {href:'#'}],'link 3',['/a'],['/li'],
                ['li'],['a', {href:'#'}],
                    {var: 'stringTemplate'},
                ['/a'],['/li'],
            ['/ul'],
            ['p'],'cute image inside div:',['/p'],
            ['div'],{var: 'img1'},['/div'],
            ['div'],{var: 'img2'},['/div'],

            // if you won't define var in var literal but use in template, don't worry, it will be ommited
            {var: 'notDefinedVar'},
            {var: 'loop'}
        ],

        img1: [
            ['img', {src:'https://placekitten.com/g/200/300', class:'footer_img'}]
        ],

        // you can use templates strings inside template array as well
        // as 'var' or just directly inside
        stringTemplate: `
            <span>some awesome <b>template string</b> inside <b>template array</b></span>
        `,

        // don't do this (loop is called inside links and looking for loop again,
        // it is a well known infinite loop - avoid this)

        // infinite loop example:
        // loop: [
        //     ['p'],{var: 'loop'},['p']
        // ]
    }
}

export {footer, mod as footerMod}